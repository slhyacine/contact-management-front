import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Directive({
  selector: '[hasAnyRoles]'
})
export class AnyRoleDirective {

  constructor(
		private authenticationService: AuthenticationService,
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef
	) { }

	@Input() set hasAnyRoles(roles: string[]) {
    const userRoles: string[] = this.authenticationService.getRoles();
		let accessAuthorized = !roles ? true : roles.some((role) => userRoles.find(ur => role === ur));

		if (accessAuthorized) {
      this.viewContainer.createEmbeddedView(this.templateRef);
			return;
		}

		this.viewContainer.clear();
	}

}
