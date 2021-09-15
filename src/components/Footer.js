import React from "react";
import "../styles/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h1>STIRKA</h1>
        <div>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.79162 12.9998C3.79162 11.1786 4.33166 9.39827 5.34347 7.884C6.35527 6.36973 7.79339 5.18949 9.47596 4.49255C11.1585 3.79561 13.01 3.61326 14.7962 3.96855C16.5824 4.32385 18.2231 5.20084 19.5109 6.48863C20.7987 7.77641 21.6757 9.41714 22.031 11.2033C22.3863 12.9896 22.2039 14.841 21.507 16.5236C20.81 18.2061 19.6298 19.6443 18.1155 20.6561C16.6013 21.6679 14.821 22.2079 12.9998 22.2079C11.2576 22.211 9.55075 21.7172 8.07936 20.7844C7.94848 20.7017 7.80137 20.6479 7.64794 20.6268C7.49452 20.6056 7.33835 20.6177 7.18996 20.662L4.07003 21.5926L5.24542 18.8442C5.31374 18.6842 5.34252 18.5101 5.32932 18.3366C5.31612 18.1632 5.26133 17.9954 5.16959 17.8476C4.26603 16.3923 3.78864 14.7128 3.79162 12.9998ZM12.9998 1.625C6.71764 1.625 1.62499 6.71765 1.62499 12.9998C1.62499 14.9909 2.1374 16.865 3.03871 18.4954L1.17 22.8655C1.08912 23.0548 1.06385 23.2632 1.09716 23.4664C1.13046 23.6695 1.22095 23.859 1.35804 24.0125C1.49513 24.1661 1.67314 24.2774 1.87121 24.3335C2.06929 24.3895 2.27924 24.388 2.47648 24.329L7.35138 22.8752C9.07062 23.8605 11.0182 24.3774 12.9998 24.3745C19.2819 24.3745 24.3745 19.2819 24.3745 12.9998C24.3745 6.71765 19.2819 1.625 12.9998 1.625ZM15.4838 15.3636L14.0592 16.3667C13.2744 15.9151 12.5536 15.3602 11.9165 14.7168C11.2324 14.0337 10.6409 13.2637 10.1572 12.4267L11.0617 11.6586C11.2502 11.4987 11.3783 11.2792 11.4248 11.0364C11.4713 10.7936 11.4334 10.5422 11.3174 10.324L10.1647 8.15737C10.088 8.01348 9.97984 7.88876 9.84821 7.79251C9.71659 7.69626 9.56494 7.63097 9.40457 7.6015C9.24419 7.57203 9.07924 7.57914 8.922 7.6223C8.76476 7.66547 8.61929 7.74357 8.49644 7.85079L8.15411 8.1487C7.33188 8.86585 6.84547 10.0445 7.24846 11.2383C7.89683 13.1266 8.96974 14.8411 10.3846 16.2497C12.3487 18.2137 14.3442 18.9872 15.512 19.2884C16.4523 19.53 17.3417 19.2061 17.9689 18.6947L18.6091 18.1726C18.7441 18.0625 18.8506 17.9215 18.9195 17.7616C18.9884 17.6016 19.0177 17.4274 19.0049 17.2537C18.9922 17.08 18.9377 16.9119 18.8462 16.7637C18.7547 16.6155 18.6288 16.4916 18.4792 16.4024L16.6614 15.3191C16.4816 15.2119 16.2746 15.159 16.0655 15.1669C15.8563 15.1748 15.6539 15.2431 15.4827 15.3636H15.4838Z"
              fill="#4376FB"
            />
          </svg>
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.99896 6.49987C2.99896 5.35062 3.4555 4.24845 4.26814 3.4358C5.08078 2.62316 6.18296 2.16663 7.33221 2.16663H20.3319C21.4812 2.16663 22.5834 2.62316 23.396 3.4358C24.2087 4.24845 24.6652 5.35062 24.6652 6.49987V19.4996C24.6652 20.6489 24.2087 21.751 23.396 22.5637C22.5834 23.3763 21.4812 23.8329 20.3319 23.8329H7.33221C6.18296 23.8329 5.08078 23.3763 4.26814 22.5637C3.4555 21.751 2.99896 20.6489 2.99896 19.4996V6.49987ZM7.33221 4.33325C6.75758 4.33325 6.20649 4.56152 5.80017 4.96784C5.39385 5.37416 5.16559 5.92525 5.16559 6.49987V19.4996C5.16559 20.0742 5.39385 20.6253 5.80017 21.0316C6.20649 21.438 6.75758 21.6662 7.33221 21.6662H13.8321V14.0831H12.7488C12.4615 14.0831 12.1859 13.9689 11.9827 13.7658C11.7796 13.5626 11.6655 13.2871 11.6655 12.9997C11.6655 12.7124 11.7796 12.4369 11.9827 12.2337C12.1859 12.0306 12.4615 11.9164 12.7488 11.9164H13.8321V10.2915C13.8321 9.28587 14.2315 8.32146 14.9426 7.6104C15.6537 6.89934 16.6181 6.49987 17.6237 6.49987H18.2737C18.561 6.49987 18.8365 6.61401 19.0397 6.81717C19.2428 7.02033 19.357 7.29587 19.357 7.58318C19.357 7.8705 19.2428 8.14604 19.0397 8.3492C18.8365 8.55236 18.561 8.66649 18.2737 8.66649H17.6237C17.4103 8.66649 17.199 8.70853 17.0018 8.79019C16.8047 8.87185 16.6255 8.99154 16.4746 9.14244C16.3237 9.29333 16.2041 9.47246 16.1224 9.66961C16.0407 9.86676 15.9987 10.0781 15.9987 10.2915V11.9164H18.2737C18.561 11.9164 18.8365 12.0306 19.0397 12.2337C19.2428 12.4369 19.357 12.7124 19.357 12.9997C19.357 13.2871 19.2428 13.5626 19.0397 13.7658C18.8365 13.9689 18.561 14.0831 18.2737 14.0831H15.9987V21.6662H20.3319C20.9066 21.6662 21.4577 21.438 21.864 21.0316C22.2703 20.6253 22.4986 20.0742 22.4986 19.4996V6.49987C22.4986 5.92525 22.2703 5.37416 21.864 4.96784C21.4577 4.56152 20.9066 4.33325 20.3319 4.33325H7.33221Z"
              fill="#172853"
            />
          </svg>
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.16316 5.17337C11.9711 4.77579 15.3575 4.77579 18.1655 5.17337C20.7167 5.53519 22.6937 7.32483 23.0707 9.25312C23.529 11.5877 23.529 14.4129 23.0707 16.7475C22.6926 18.6758 20.7167 20.4654 18.1655 20.8272C15.3575 21.2248 11.97 21.2248 9.16316 20.8272C6.61197 20.4654 4.63601 18.6758 4.25793 16.7475C3.79969 14.4129 3.79969 11.5877 4.25793 9.25312C4.63601 7.32483 6.61197 5.53519 9.16316 5.17337ZM18.4688 3.02841C15.4605 2.60267 11.8682 2.60267 8.85984 3.02841C5.59365 3.49099 2.72288 5.82119 2.13247 8.83713C1.62007 11.4468 1.62007 14.5538 2.13247 17.1635C2.72288 20.1794 5.59365 22.5096 8.85984 22.9722C11.8682 23.3979 15.4605 23.3979 18.4688 22.9722C21.735 22.5096 24.6058 20.1794 25.1962 17.1635C25.7086 14.5538 25.7086 11.4468 25.1962 8.83713C24.6058 5.82119 21.735 3.49099 18.4688 3.02841ZM12.0989 7.76573C11.9358 7.65688 11.7462 7.59437 11.5503 7.58485C11.3544 7.57534 11.1596 7.61918 10.9866 7.7117C10.8137 7.80423 10.6691 7.94197 10.5684 8.11022C10.4676 8.27847 10.4144 8.47092 10.4144 8.66705V17.3335C10.4144 17.5297 10.4676 17.7221 10.5684 17.8904C10.6691 18.0586 10.8137 18.1964 10.9866 18.2889C11.1596 18.3814 11.3544 18.4253 11.5503 18.4157C11.7462 18.4062 11.9358 18.3437 12.0989 18.2349L18.5988 13.9016C18.7472 13.8027 18.8688 13.6686 18.953 13.5114C19.0371 13.3542 19.0811 13.1786 19.0811 13.0003C19.0811 12.822 19.0371 12.6464 18.953 12.4892C18.8688 12.3319 18.7472 12.1979 18.5988 12.099L12.0989 7.76573ZM16.0444 13.0003L12.581 15.3099V10.6918L16.0444 13.0003Z"
              fill="#172853"
            />
          </svg>
        </div>
        <h3>+7 (708) 380 - 70 - 09</h3>
      </div>
    </footer>
  );
}

export default Footer;
