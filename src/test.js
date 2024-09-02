const openPopup = () => {
    const popupForm = document.getElementById('your-form-id');
    popupForm.removeAttribute('your-hidden-css');
    //從外面input賦值到內部form表單,以下假設順序完全正確
    const outSideInputs = document.querySelectorAll('outSideInput');
    const formInput = document.querySelectorAll('form-input');
    outSideInputs.forEach((outsideInput,index) => formInput[index].textContent = outsideInput.textContent);
}
const cleanInputValue = (input) => {
    return input.map( value => '' );
}
const closePopup = () => {
    //反向將CSS加回去
    const popupForm = document.getElementById('your-form-id');
    popupForm.removeAttribute('your-hidden-css');
}
const formSubmit = async(e) => {
    e.preventDefault();
    //取值並送出api
    const values = [...yourFormValue];
    try{
        //如果有成功信號再補充邏輯
        const res = await axios.post(...yourLogic)
        if(res.ok){
            //若有需要清空input和關閉popup
            // cleanInputValue()
            // closePopup()
        }
    }catch{
        throw(error)
    }
}