import React from "react";

const abitur = () => {
  return (
    <div>
      <h1>Абитуриентам</h1>
      <ul>
        <li>
          <a href="https://kstu.kg/fileadmin/user_upload/algoritm_provedenija_ehkzamena_khpi_01.pdf">
            {" "}
            Алгоритм проведения экзамена ХПИ
          </a>{" "}
        </li>
        <li>
          <a href="https://kstu.kg/fileadmin/user_upload/bilety_vstupit_ehkzamena_khpi_02.pdf">
            Билеты вступит экзамена ХПИ{" "}
          </a>
        </li>
        <li>
          <a href="https://kstu.kg/fileadmin/user_upload/kriterii_ocenki_vstup_ispytanii_02.pdf">
            Критерии оценки вступ испытаний
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default abitur;
