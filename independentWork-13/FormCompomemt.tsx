export const FormCompomemt = () => {
  const submit = (e: any) => {
    alert(e.target.password.value);
  };
  return (
    <>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Платформа 1</legend>
        <label>Скрытый</label>
        <input hidden/>
        <label>Пароль</label>
        <input id='password' type='password' required/>
         <label>Чтение</label>
        <input value='ReadOnly'  readonly/>
          <label>радио кнопки</label>
          <div>
           <input type='radio' name='form' value='testBtn1'/>testBtn1
           <input type='radio' name='form' value='testBtn2'/>testBtn2
           <input type='radio' name='form' value='testBtn3'/>testBtn3
           <input type='radio' name='form' value='testBtn4'/>testBtn4
            </div>
          </fieldset>
         <fieldset>
          <legend>Платформа 2</legend>
            <label >Скрытый</label>
             <input disabled/>
           <label for='num'>Number</label>
             <input id='num' type='number' max='100' min='1'/>
           <label>Поле с ограниченной длиной</label>
             <input  maxlength='9' minlength='2'/>
           <label>email с множественным вводом</label>
             <input type='email' multiple />
           <label>Поля с подскаской</label>
             <input  placeholder='подскаскa'/>
            </fieldset>
         <fieldset>
          <legend>Платформа 3</legend>
        <label>календарь</label>
             <input  type='date'/>
              <label>телефон</label>
             <input  type='tel'/>
           <label>загрузка файла</label>
             <input  type='file'/>
           <label>чекбоксы</label>
          <div>
           <input type='checkbox' name='form1' value='testBtn1'/>testBtn1
           <input type='checkbox' name='form1' value='testBtn2'/>testBtn2
           <input type='checkbox' name='form1' value='testBtn3'/>testBtn3
            </div>
            </fieldset>
         <fieldset disabled>
          <legend>Платформа 4</legend>
        <label>Скрытый</label>
        <input hidden/>
        <label>Пароль</label>
        <input  type='password' required/>
         <label>Чтение</label>
        <input value='ReadOnly'  readonly/>
          <label>радио кнопки</label>
          <div>
           <input type='radio' name='form' value='testBtn1'/>testBtn1
           <input type='radio' name='form' value='testBtn2'/>testBtn2
           <input type='radio' name='form' value='testBtn3'/>testBtn3
           <input type='radio' name='form' value='testBtn4'/>testBtn4
            </div>
            </fieldset>
           <fieldset>
         <legend>Платформа 5</legend>
        <label>Селект</label>
         <select>
           <option>option1</option>
           <option>option2</option>
           <option>option3</option>
         </select>
             <label>Мульти селект</label>
              <select multiple>
           <option>option1</option>
           <option>option2</option>
           <option>option3</option>
           <option>option4</option>
         </select>
             <label>textarea</label>
             <textarea value='Стартовый текст'></textarea>
            </fieldset>

         <input type='submit' value='Отправить'/>
          <input type='reset' value='Сбросить'/>
        </form>
    </>
  );
};
            {/* 1 Сделать форму  с кнопкой отправки и кнопкой сброса полей.
     По кнопке отправить долна вызваться функция которая вызвает alert с паролем */}
        {/*2  разбить форму на 4 группы элементов с заголовками (Подформа 1, Подформа 2, ...) */}

        {/* 3 */}
        {/* 1 группа : скрытое поле, обязательное поле пароля,
         текстовое поля(только для чтения), группа из 3 радиобатаннов */}
        {/* 2 группа : не активное поле,поле с числами с ограничением от 1 до 100,
         текстовое поля(с ограничением длины от 3 до 9 символов),
         поле email с множественным вводом, текстове поле c подсказкой */}
        {/* 3 группа : поле с датой,поле телефона, поле загрузки файлаю,
         группа из 3 checkbox */}
        {/* 4 группа аналогична с 1 только все поля должны быть не активны. */}






