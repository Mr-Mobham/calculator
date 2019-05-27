$(document).ready(()=>{
  const elem_calculator_result = $(`.js-calculator-result`);
  const elem_calculator_plus   = $(`.js-calculator-plus`);
  const elem_calculator_type   = $(`.js-calculator-type`);
  const elem_calculator_minus  = $(`.js-calculator-minus`);
  const elem_calculator_calc   = $(`.js-calculator-calc`);
  const elem_review_calc       = $(`.js-show-calc`);

  let calc_number              = 0;
  let operator                 = '';

  Plus();
  Minus();
  Calc();

  function _parseInt(num){
    return parseInt(num);
  }

  function Plus(){

    elem_calculator_plus.on(`click`,(e)=>{
      const target             = $(e.target);
      const val_review_number  = _parseInt(elem_calculator_type.val());
      let trust_show_result    = true;

        if (isNaN(parseFloat(val_review_number))) { // چیک کردن خالی بودن input //
          trust_show_result = false;
        }


      if (trust_show_result) {
          calc_number+=val_review_number;

          elem_calculator_result.attr(`data-save-result`,calc_number);
          elem_calculator_type.val('');
      }

      operator = '+';


    });

  }

  function Minus(){


    elem_calculator_minus.on(`click`,(e)=>{
      const target             = $(e.target);
      const val_review_number  = _parseInt(elem_calculator_type.val());
      let trust_show_result    = true;

        if (isNaN(parseFloat(val_review_number))) { // چیک کردن خالی بودن input //
          trust_show_result = false;
        }



      if (trust_show_result) {
        calc_number-=val_review_number;

        elem_calculator_result.attr(`data-save-result`,calc_number);
        elem_calculator_type.val('');
      }

      operator = '-';


    });

  }

  function Calc(){
        elem_calculator_calc.on(`click`,(e)=>{
          let data_calc_result     = _parseInt(elem_calculator_result.attr(`data-save-result`)); // result //
          const val_review_number  = _parseInt(elem_calculator_type.val()); // val input//

          if (!isNaN(parseFloat(val_review_number))) { // چیک کردن خالی بودن input //

            switch (operator) {
              case "+":
              data_calc_result+=val_review_number;
              break;

              case "-":
              data_calc_result-=val_review_number;
              break;
            }

            // if (operator === '+') {
            //   data_calc_result+=val_review_number;
            // }
            //
            // if (operator === '-') {
            //   data_calc_result-=val_review_number;
            // }


            elem_review_calc.text(data_calc_result);
            elem_calculator_result.attr(`data-save-result`,data_calc_result);
            elem_calculator_type.val('');
          }

        });

  }



















})
