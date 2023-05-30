import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDibMdS+ZHibdJqvqBe038V71fgYbrrSWxLeK8wiJg4gbjZuVsK0ky7N6WgSrxXN0PEA/p1ScsuwrTTQL50RafCLXPPgwDJ/256/ACbYRkWfjjkbtA6DbsZFDAgJh5/7lwjvVXiGddv3KVvRtuo+iO86YG5e2zuGZtlNed6pWgg3vdASai3Y1lr2SSESZ0J5IY9TzhLhlCUyht7GPcqInheo3A9Ve2H9sJetuctlpUYWMAqZUtZ2PVVXcH4dQvm2WnB2GdI+UGkH4EnzdQYMmeGb6kqWL3Cp14ny5vnASDG3OLqyXjy8+bUNkbISbGidL2riFysVRMHfjtHKiaOkXpEnW/RGULKwhJqhC+1fAqx/YxsKUTzgRteecT10+DWj9kTGYCH2Wd/qdtFk5fDhq0Yqmowui0jcxHhqEd+ka/cYftrJ4WKO3gecqSpqIc/xNnH88dv3LmhPIBrc4i6XvLioaPPObo68OWWQfnjIKzEjbTWaSfakdsZJaAUxExcMAH6egSlmnaIIFh5BJxMJx0J3/cGR4HyiI1ETOixwaFEjQs+p9PJj5kqzfyRwRxf4ZsRNecjpV7naBhfXMmQyjrRB8snjaGAmLjQ6cTm8eAvGWPamtCADSgRQs+ELR/+3Pda1gMQZWOg22/N+CE0C7M04oUwWCcNOfX8jB+L2n/C1Q== ubuntu@ip-172-31-20-181
}
