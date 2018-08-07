import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatInput, MatFormFieldControl} from '@angular/material';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  @Input() parentData;
  form: FormGroup;
  objectProps;
  // person = {
  //   firstname: 'Arun',
  //   age: 36,
  //   cool: 'hello',
  //   haha: 'cooco',
  //   yyy: 123
  // };
  // personProps = [];
  constructor() { }

  temp = {
    capacity: {
      label: 'Capacity(lbs)',
      value: '3500',
      type: 'select',
      options: [
        { label: '(choose one)', value: ''},
        { label: '2100', value: '2100'},
        { label: '2500', value: '2500'},
        { label: '3000', value: '3000'},
        { label: '3500', value: '3500'},
        { label: '4000', value: '4000'},
        { label: '4000H', value: '4000H'},
        { label: '4500H', value: '4500H'},
        { label: '5000H', value: '5000H'},
        { label: '5000AIA', value: '5000AIA'}
      ],
      validation: {
        required: true
      }
    },
    speed: {
      label: 'Speed(fpm)',
      value: '200',
      type: 'select',
      options: [
        { label: '(choose one)', value: ''},
        { label: '150', value: '150'},
        { label: '200', value: '200'},
        { label: '350', value: '350'},
        { label: '400', value: '400'},
        { label: '450', value: '450'},
        { label: '500', value: '500'}
      ],
      validation: {
        required: true
      },
      rules: [
        {
          selectedValue: 500,
          affectedField: 'capacity',
          type: 'restrictValues',
          newValue: '2500',
          newOptions: [
                {label: '(choose one)', value: ''},
                {label: '2100', value: '2100'},
                {label: '2500', value: '2500'}
              ]
        },
        {
          selectedValue: 400,
          affectedField: 'capacity',
          type: 'restrictValues',
          newValue: '3500',
          newOptions: [
                  { label: '(choose one)', value: ''},
                  { label: '2100', value: '2100'},
                  { label: '2500', value: '2500'},
                  { label: '3000', value: '3000'},
                  { label: '3500', value: '3500'}
              ]
        }
    ]
    },
    freetext: {
      label: 'Free Text',
      value: 'My free text',
      type: 'text'
    },
    glassdoor: {
      label: 'Glass back required?',
      value: 'No',
      type: 'radio',
      options: [
        { label: 'Yes', value: 'Yes'},
        { label: 'No', value: 'No'}
      ],
      rules: [
        {
          selectedValue: 'Yes',
          affectedField: 'freetext',
          type: 'setValues',
          newValue: '25'
        },
        {
          selectedValue: 'Yes',
          affectedField: 'rearentrance',
          type: 'disable'
        },
        {
          selectedValue: 'No',
          affectedField: 'rearentrance',
          type: 'enable'
        }
      ]
    },
    rearentrance: {
      label: 'Rear entrance required?',
      value: 'No',
      type: 'radio',
      options: [
        { label: 'Yes', value: 'Yes'},
        { label: 'No', value: 'No'}
      ]
    },
    seismiczone: {
      label: 'Seismic Zone',
      value: 'Zone0',
      type: 'select',
      options: [
        { label: '(choose one)', value: ''},
        { label: 'Zone0', value: 'Zone0'},
        { label: 'Zone1', value: 'Zone1'},
        { label: 'Zone2', value: 'Zone2'},
        { label: 'Zone3', value: 'Zone3'},
        { label: 'Zone4', value: 'Zone4'}
      ],
      validation: {
        required: true
      }
    }
  };

  ngOnInit() {
    // alert(this.parentData);
    // const formDataObj = {};
    // for (const prop of Object.keys(this.person)) {
    //   formDataObj[prop] = new FormControl(this.person[prop]);
    //   this.personProps.push(prop);
    // }
    // this.form = new FormGroup(
    //   formDataObj
    // );

    // -------------------------------------------------------
   /* this.objectProps =
      Object.keys(this.temp)
        .map(prop => {
          return Object.assign({}, { key: prop} , this.temp[prop]);
        });

    // console.log(this.objectProps);
    const formGroup = {};
    for (const prop of Object.keys(this.temp)) {
      formGroup[prop] = new FormControl(this.temp[prop].value || '', this.mapValidators(this.temp[prop].validation));
    } */
    // console.log(formGroup);
   /*  this.form = new FormGroup(formGroup); */

    // this.form.valueChanges.subscribe(val => {
    //  console.log('val =>' + JSON.stringify(val));
    // });
    // console.log(this.form.controls.length);
    // console.log(Object.keys(this.temp)[0]);
  /*  Object.keys(this.temp).map((key) => {
      console.log('mmm' + Object.keys(this.temp).indexOf(key));
      const cool = Object.keys(this.temp).indexOf(key);
      const mykey = key;
      this.form.controls[key].valueChanges.subscribe((val) => {
        // console.log(cool + ',' + val);
        this.checkForRules(cool, val, this.temp, mykey);
      });
    }); */

    this.initForms();
  }

  initForms() {
    this.objectProps =
      Object.keys(this.temp)
        .map(prop => {
          return Object.assign({}, { key: prop} , this.temp[prop]);
        });

    // console.log(this.objectProps);
    const formGroup = {};
    for (const prop of Object.keys(this.temp)) {
      // tslint:disable-next-line:max-line-length
      formGroup[prop] = new FormControl({value: this.temp[prop].value || '', disabled: this.temp[prop].disabled || false}, this.mapValidators(this.temp[prop].validation));
    }
    // console.log(formGroup);
    this.form = new FormGroup(formGroup);

    // this.form.valueChanges.subscribe(val => {
    //  console.log('val =>' + JSON.stringify(val));
    // });
    // console.log(this.form.controls.length);
    // console.log(Object.keys(this.temp)[0]);
    Object.keys(this.temp).map((key) => {
      // console.log('mmm' + Object.keys(this.temp).indexOf(key));
      const cool = Object.keys(this.temp).indexOf(key);
      const mykey = key;
      this.form.controls[key].valueChanges.subscribe((val) => {
        // console.log(cool + ',' + val);
        this.checkForRules(cool, val, this.temp, mykey);
      });
    });


    // for retaining the selected values, but ending up updating to the previous value

    // this.form.valueChanges.subscribe((val) => {
    //   console.log('VAL =>');
    //   console.log(val);
    //   for (const a in val) {
    //     // if (val.key(a)) {
    //     //    console.log(val)
    //     // }
    //     console.log(a);
    //     this.temp[a].value = val[a];
    //     console.log(this.temp[a].value);
    //   }
    // });
  }

  private mapValidators(validators) {
    // console.log('fff' + JSON.stringify(validators));
    // console.log('bbb' + JSON.stringify(Validators.required));
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }
  // btnClick() {
  //   this.objectProps =
  //   Object.keys(this.temp)
  //     .map(prop => {
  //       return Object.assign({}, { key: prop} , this.temp[prop]);
  //     });

  // // console.log(this.objectProps);
  // const formGroup = {};
  // for (const prop of Object.keys(this.temp)) {
  //   formGroup[prop] = new FormControl(this.temp[prop].value || '', this.mapValidators(this.temp[prop].validation));
  // }
  // // console.log(formGroup);
  // this.form = new FormGroup(formGroup);
  // }
  onChange(evt) {
    // alert(evt.target.value);
    // console.log(evt.target.prop);
    // if (evt.target.value === '500') {
    //     console.log('it is 500');
    //     this.temp.capacity.options = this.temp.speed.rules.new;
    //     this.temp.capacity.value = '';
    // }
    // this.btnClick();
  }
  checkForRules(index, value, obj, key) {
   // console.log(obj.key[key];
    console.log(obj[key].rules);
    if (obj[key].rules) {
      // alert('Rules needed');
      // console.log(obj[key].rules);
      // console.log(obj[key].rules.length);
      Object.values(obj[key].rules).map((val) => {
        // console.log('nnnn' + JSON.stringify(val));
        this.applyRules(val, value, obj, key);
      });
    } else {
      // alert('No rules');
    }
  }
  applyRules(rule, value, obj, key) {
    console.log('value =>' + value);
    console.log('rule.selectedValue =>' + rule.selectedValue);
    // tslint:disable-next-line:triple-equals
    if (value == rule.selectedValue) {
      // alert(rule.affectedField);
      // console.log(obj[rule.affectedField]);
      console.log('TYPE ');
      console.log(rule.type);
      // tslint:disable-next-line:triple-equals
      if (rule.type == 'restrictValues') {
        // alert('cool');
          obj[rule.affectedField].options = rule.newOptions;
          obj[rule.affectedField].value = rule.newValue;
          obj[key].value = value;
          this.initForms();
      } else if (rule.type == 'setValues') {
           // console.log(',,,,,,,,,,,,,,,');
           obj[rule.affectedField].value = rule.newValue;
           obj[key].value = value;
           // console.log('RULE VALUE');
           // console.log(rule.newValue);
           // console.log('changed VALUE');
           // console.log(obj[rule.affectedField]);
           this.initForms();
      } else if (rule.type == 'disable') {
        console.log('NNNNNNNNNNNNN');
        obj[rule.affectedField].disabled = 'true';
        console.log(obj);
        obj[key].value = value;
        this.initForms();
      } else if (rule.type == 'enable') {
        console.log('WWWWWWWW');
        delete obj[rule.affectedField].disabled;
        console.log(obj);
        obj[key].value = value;
        this.initForms();
      }
      // switch (JSON.stringify(rule.type)) {
      //   case 'restrictValues':
      //     console.log('^^^^^^^^^^^^^^^^^^^');
      //     break;
      //   // tslint:disable-next-line:no-switch-case-fall-through
      //   case 'arun':
      //     console.log(',,,,,,,,,,,,,,,');
      //     obj[rule.affectedField].value = rule.newValue;
      //     break;
      //   // tslint:disable-next-line:no-switch-case-fall-through
      //   default:
      //     console.log('default case......');
      // }
      // console.log(obj.options);
      this.temp = {...obj};
      console.log('OBJ =>+++');
      console.log(obj);
    }
    console.log('TEMP =>');
    console.log(this.temp);
    // console.log('Obj => + ')
    // console.log(obj);
  }
}


// form = new FormGroup({
//   first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
//   last: new FormControl('Drew', Validators.required)
// });

// new FormControl(this.temp[prop].value || '', this.mapValidators(this.temp[prop].validation));
