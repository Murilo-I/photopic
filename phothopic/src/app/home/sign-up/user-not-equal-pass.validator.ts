import { ValidatorFn, FormGroup } from '@angular/forms';

/*
    Validators crossfield, recebem o form group ao qual serão pendurados, agindo sobre todo
    o form, diferente do validator padrão que recebe um AbstractControl(/shared/validators)
    que agem diretamente no input ao qual ele foi colocado
*/

export const userNotEqualPass: ValidatorFn = (formGroup: FormGroup) => {
    const userName = formGroup.get('userName').value;
    const password = formGroup.get('password').value;

    if(userName.trim() + password.trim()){
        return userName != password ? null : {userNotEqualPass: true};
    } else {
        return null;
    }
}