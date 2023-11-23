import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthService } from "../auth.service";
import { ForbiddenRoleException } from "../exceptions/forbidden_role.exception";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor (private reflector:Reflector,private authService:AuthService){}

    async canActivate(context: ExecutionContext):Promise<boolean> {
        const roles=this.reflector.get<string[]>('roles',context.getHandler());
        console.log('roles',roles);

        const request = context.switchToHttp().getRequest();
        if(request?.user){
          const headers:Headers=request.headers;
          let user = this.authService.user(headers);
          
          if (!roles.includes((await user).role)) {
            throw new ForbiddenRoleException(roles.join(' or '));
          }
        return true;
        }
        return false;
    }
}
