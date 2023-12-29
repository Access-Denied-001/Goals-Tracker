const StepBuilder = (title, complete) => {
    const step = {
      toggleComplete: function(){
        if(this.complete === true){
          this.complete = false;
        }else{
          this.complete = true;
        }
      },
    };
  
    step.title = title;
    step.complete = complete;
    if(step.complete === undefined){
      step.complete = false;
    }
  
    return step;
};

export default StepBuilder;