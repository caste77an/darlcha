import "../css/main.css";

function Footer() {
  return (
    <div className="footer container mw-100">
      <div className="row pb-3">
        <div className="col px-4">
          <div className="footer_text pt-5">
            <p className="footer_titl m-0">주식회사 달차컴퍼니</p>
            <div className="horizon_line my-2"></div>
            <div className="d-flex">
              <p className="footer_info m-0">사업자 등록번호 : 317-81-47784</p>
              <div className="vert_line mx-2"></div>
              <p className="footer_info m-0">대표자 : 정유찬</p>
            </div>

            <p className="footer_info m-0 mt-2">
              주소: 서울특별시 강남구 역삼로 180, 4층(역삼동, MARU 180)
            </p>
            <p className="footer_info m-0 mt-2">
              통신판매업 신고번호 : 제 2019-서울강남-03967호
            </p>
            <div className="d-flex mt-2">
              <p className="footer_info m-0">전화번호 : 1670-0506</p>
              <div className="vert_line mx-2"></div>
              <p className="footer_info m-0">이메일 : hi@darlcha.com</p>
            </div>
          </div>
        </div>
        <div className="col px-4">
          <div className="footer_text h-100 pt-5">
            <p className="footer_darlcha_text m-0">
              DARL<span>CHA</span>
            </p>
            <div className="horizon_line my-2"></div>
            <p className="footer_info m-0 mt-2">브랜드 스토리</p>
            <p className="footer_info m-0 mt-2">제휴문의</p>
            <div className="footer_imgs mt-5">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABtCAYAAACr+O9WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEOklEQVR4nO2d7W3bMBCGr0X/yxs0ncDpBHEnSDqB3QmaTFB3grgTRJ6g6QR1NrA3sDdQJnDB4BQIAkl9kTxe8z6AEcRILNKPSJ34cXp3Pp8J6OI9l3ZBREciOuOV7WtTn1l1SzPCPqLBZc9nItrXLQ3CdDCjRvcIFAFpCoE0hUCaQiBNIZCmEClpz0T0REQHhd/ZiYj+8E8RJKQZURc8CnNJRF+kKj+CLZf9hn/+kiiEhDRT4arx+06q8gMxLWvV+pdbiRYnIe1oee9RoBxDsZWbJMqOQGQ6VewDtIE0hUCaQiBNIZCmEEhTCKQpBNIUAmkKgTSFQJpCIE0hkKYQSJvOLPUBIa0/O8dfXqYuCKQpREKa7czcC5RjKK5J0DfRPdoqWUkulOmJ68Sapy6IhLSF433XNSMHnh3SXHWJCqT1w7UOJHkQQkLSrhxdZMlndI64pL2Zlka8jM5GKVQeHyeHNHPiXUsUKDdpG8f7kqwH1iE6UtKueYVuGxNW/xQqk42Dp/W7ZEZH8ubaVelNRuF/e0VxzUJyy7OktKWjtVWSXU+DO8+9mWg3Lj2M5aq8+bK+JS5Lk62nbCuJG+om0tKuOyJJCXFbT7c4yyFYymHAuPSM36UW5xNGHPoXCctjJQdpRcdoSMlJT2IHJ3cdwtY8MCBOLlMz844b6z0PGcXYx/bEJ4Wv2zMyf0Q49ihymk9bdoireBPfJ+7GpmJkfeXw3Tc1ZIQ9hK3qNOrcWDmlouu6rtTU22hvBnRb9ZBU2XMOLzdhZqvzLkdpxK2gvc23iwWLbN/7VSxoP/Dz1jl1iUzW0qixxzn1lM0Ft8Qsgo4WL9JyXiNihon+dtwShOaWW2SOwl7RsLBnyQPJ64jyVnyM+xzuw7rQshqr4OuL+WLLQDPGF3wiHDnYUJPzMudrWhcnvt7tGoGGjxnLXnCQIzp+OJLsA5ExHBwRYtbXqAG8SPugprj90Nh6BoMVxgqBNIVAmkIgTSGQphBIUwikKQTSFAJpCoE0hUCaQiBNIZCmEEhTCKQpBNIUAmkK+d9mrkOx9WTouR2wYuvUsdR9NWZBEaTZKT2LZM0Cot89P+fYsTd71DZgdI/DeZTezA9p41jzg+9EgLTxrKSetAhp46lYXPLUUJA2jX3PvXRBgbTpJA9MIC0MSQMTSAtHssAE0sZhG+VIFphA2jiWjgAkSWACaeN5cGxujB6YQNo0do5MelEDE0ibRsEty7YXfBXreQOQNp25I0VTnWEoOJAWhmUsQTYgLRz3qTLCQlpYQqXL8AJpYSlSZBiCtPDMPU/MCAKkxeEqZq5jSIvH91hDWpAWl02MwARL6OxsBib0dFE0cnfZGCUU0uyETNdUhM7Nhe5RIZCmEEhTCKQpBNIUAmkKgTSFQJpCamkxnpYEwnKoNzrW2cKJh1RSPWkCDOd1Z2pTGtAAEf0D8y0nL1hPI7YAAAAASUVORK5CYII="
                alt="Naver store"
                class="footer_img"
              />
              <img
                src="data:image/png;base64,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"
                alt="Instagram"
                class="footer_img mx-2"
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAACXBIWXMAAAsSAAALEgHS3X78AAADCElEQVRoge1a0XHcIBB9zvjfSgUhFUSuICpBHUTpQO7g0oHSwbmCOB3IFUTXga4DqQI8TJYbjAVIYrlJZL0Z5s4+AftgYR+LbqSU2Do+bJ7hTnJD2EluBTvJreBdkLy9Uj8ZgHzi/x2AIXXnKUlWAEoABYA7z3MjgBbAE4BjEkuUrGMutZRykOvQSylLbps4G8uklMeV5GxUnCQ5BbpytW9cjQH4DKDnaIhrd62YCSocuBriIKl2zibwzG8A9wBuaIYeaMPxoWSw7S8YfL4OrK+DZw2HNqicY01yzKRv3Zw9bjfMCBlZhF0XcJBU8e0jgO/klqYbhkgkFwJgFAN6VjSpgj5bpvajkErxuMjlhgrKA0qIDam1a2aQKq9FykYKkhnFTVW+JGh/MThJ6njJLQqiwUWypE1nrjs+07pVR61fibhdwEEyn2noI4Wb1ggdRaCOYLCPhWRI0p1opqdEw39BUhnx1fP7SERcQT9EkgWxiidkZBtQNb4BAtdMxpKMMWLOKYNlplNn6wpHAgszSX7y1J+NWJIhgX1HLmsbmi+Ip/VK2y6ITX8oY//MeG4kBTSQizcLJV5UKoQjx9OTW6XEw4xQ5QTHmox1p3Pg95FExGpwHZofV9b9Se7rqn+izWvKVXOaXbXmzfJ20CfyLmtznocFedVWSllY9SvrmSPZY/cjqL4PdSjvWlNepiHRvWTBCwoNpXUoHkmMd9RmF6jfep6pHPFZGDv286sY65iVxhilpxSp+0SlM7zg0oevM9t9Bqr8LxHOaUIE/d2Tra/cdU4j/YTva8KV0cE1SkaDfCS7BmNt54Z9YglJ3XAzQdRETx3XExtKTCloIBvDFTU6K/msk9yt3d8SMSBo0widHDRG45LV3ETsi1dThAuj+ATGj4mkdUc5pfs3m9aKURaMV3RLcXQsD0HtTIa/GFl3razcyUhcuw4EFX1OZuy57icFuZ0uMVr2TO6mr9ij7yhTvSWpX4TIje+uy5vWWLdJXpTYXwXdCnaSW8FOcivYSW4FO8lNAMALhGQbl/jarw4AAAAASUVORK5CYII="
                alt="Amazon"
                class="footer_img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
