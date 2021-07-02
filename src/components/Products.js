import "../css/main.css";
import React from "react";

function Products() {
  return (
    <div className="Products">
      <div className="products d-flex flex-column align-items-center justify-content-center py-5">
        <p className="product_intro_ko">검정보리 음료</p>
        <p className="product_intro_en my-0">BLACK BARLEY SERIES</p>
        <div className="product_intro_des">
          <p>
            커피를 좋아하지만 카페인은 싫은 당신을 위한 '페이크 커피'입니다.
            <br />
            카페인이 전혀 없고, 칼로리도 낮고, 라떼 제품은 락토프리 우유를
            사용하여
            <br />
            언제나 부담없이 즐기실 수 있답니다.
          </p>
        </div>
        <div className="pc_screen">
          <div className="product container mw-100">
            <div className="row d-flex justify-content-center">
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li col-xl-4 col-md-5 d-flex justify-content-center">
                <img
                  src="https://darlcha-store.s3.amazonaws.com/static/media/latte_home.3a45f28d.png"
                  className="product_li_image"
                  alt=""
                />
              </div>
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li_txt_box col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <div className="product_li_txt d-flex flex-column">
                  <p className="product_li_titl">달차 검정보리라떼</p>
                  <p className="product_li_des">
                    은은한 달콤함과 고소함이 특징인 검정보리 라떼입니다.
                    칼로리가 100ml당 22.5칼로리로 시중 라떼의 1/4 수준이에요.
                    2021년 새롭게 리뉴얼된 제품으로 더 풍부한 맛을 느껴보세요.
                  </p>
                  <p className="product_li_pkg">6 / 12 / 24 개입</p>

                  <div className="container p-0">
                    <div className="row mx-0">
                      <div className="col-xl-12 col-md-3 p-0">
                        <div className="product_li_price">
                          <p>15,390 원~</p>
                        </div>
                      </div>
                      <div className="col-xl-0 col-md-5 p-0"></div>
                      <div className="col-xl-12 col-md-4 d-flex align-items-end justify-content-between my-2 p-0">
                        <div className="product_btn w-100">
                          <div className="btn-per px-1">최대 25% 할인</div>
                          <div className="btn-fir px-1">첫구매 추가할인</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product container mw-100">
            <div className="row d-flex justify-content-center">
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li col-xl-4 col-md-5 d-flex justify-content-center">
                <img
                  src="https://darlcha-store.s3.amazonaws.com/static/media/original_home.13a1f129.png"
                  className="product_li_image"
                  alt=""
                />
              </div>
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li_txt_box col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <div className="product_li_txt d-flex flex-column">
                  <p className="product_li_titl">달차 검정보리오리지널</p>
                  <p className="product_li_des">
                    진한 보리차와 아메리카노 사이의 고소함과 쌉쌀함을 특징으로
                    하는 검정보리 오리지널입니다. 물 대신, 아메리카노 대신
                    카페인 걱정없이 데일리 음료로 가볍게 즐기기에 제격이에요.
                  </p>
                  <p className="product_li_pkg">6 / 12 / 24 개입</p>

                  <div className="container p-0">
                    <div className="row mx-0">
                      <div className="col-xl-12 col-md-3 p-0">
                        <div className="product_li_price">
                          <p>15,390 원~</p>
                        </div>
                      </div>
                      <div className="col-xl-0 col-md-5 p-0"></div>
                      <div className="col-xl-12 col-md-4 d-flex align-items-end justify-content-between my-2 p-0">
                        <div className="product_btn w-100">
                          <div className="btn-per px-1">최대 25% 할인</div>
                          <div className="btn-fir px-1">첫구매 추가할인</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product container mw-100">
            <div className="row d-flex justify-content-center">
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li col-xl-4 col-md-5 d-flex justify-content-center">
                <img
                  src="https://darlcha-store.s3.amazonaws.com/static/media/bundle_home.36ecc38c.png"
                  className="product_li_image"
                  alt=""
                />
              </div>
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li_txt_box col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <div className="product_li_txt d-flex flex-column">
                  <p className="product_li_titl">
                    검정보리라떼 & 오리지널 번들
                  </p>
                  <p className="product_li_des">
                    검정보리 라떼와 오리지널을 한 번에 즐길 수 있는 번들
                    제품입니다. 각 제품 6병씩 총 12병으로 구성되어 있어요. 둘 중
                    어느 제품을 구매할지 고민되신다면, 번들을 선택해보세요.
                  </p>
                  <p className="product_li_pkg">12 개입(6 + 6)</p>

                  <div className="container p-0">
                    <div className="row mx-0">
                      <div className="col-xl-12 col-md-3 p-0">
                        <div className="product_li_price">
                          <p>25,500 원~</p>
                        </div>
                      </div>
                      <div className="col-xl-0 col-md-5 p-0"></div>
                      <div className="col-xl-12 col-md-4 d-flex align-items-end justify-content-between my-2 p-0">
                        <div className="product_btn w-100">
                          <div className="btn-per px-3">15% 할인</div>
                          <div className="btn-fir px-1">첫구매 추가할인</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="darlcha3 d-flex flex-column align-items-center pt-5">
        <p className="darlcha3_titl">달차의 세 가지 원칙</p>
        <p className="darlcha3_des m-0">
          달차는 무카페인과 무설탕을 원칙으로 하고 있어요.
          <br />
          라떼 제품은 소화가 잘되는 락토프리 우유만을 사용합니다.
        </p>
        <div className="container p-0 mt-5">
          <div className="row">
            <div className="col d-flex justify-content-center w-100 p-0">
              <div className="darlcha3_img1 d-flex justify-content-center align-items-center p-0">
                <div className="darlcha3_opacity d-flex justify-content-center align-items-center">
                  <p className="m-0">無 설탕</p>
                </div>
              </div>
              <div className="darlcha3_img2 d-flex justify-content-center align-items-center mx-3 p-0">
                <div className="darlcha3_opacity d-flex justify-content-center align-items-center">
                  <p>無 카페인</p>
                </div>
              </div>
              <div className="darlcha3_img3 d-flex justify-content-center align-items-center p-0">
                <div className="darlcha3_opacity d-flex justify-content-center align-items-center">
                  <p>락토프리우유</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products d-flex flex-column align-items-center py-5">
        <p className="product_intro_ko">무카페인 허브차</p>
        <p className="product_intro_en my-0">HERBAL INFUSED TEA</p>
        <div className="product_intro_des">
          <p>
            커피를 좋아하지만 카페인은 싫은 당신을 위한 '페이크 커피'입니다.
            <br />
            카페인이 전혀 없고, 칼로리도 낮고, 라떼 제품은 락토프리 우유를
            사용하여
            <br />
            언제나 부담없이 즐기실 수 있답니다.
          </p>
        </div>

        <div className="pc_screen">
          <div className="product container mw-100">
            <div className="row d-flex justify-content-center">
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li col-xl-4 col-md-5 d-flex justify-content-center">
                <img
                  src="https://darlcha-store.s3.amazonaws.com/static/media/leaveme_home.151641c3.png"
                  className="product_li_image"
                  alt=""
                />
              </div>
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li_txt_box col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <div className="product_li_txt d-flex flex-column w-100">
                  <p className="product_li_titl">Leave Me - 가벼워지다</p>
                  <p className="product_li_des">
                    쌓여가는 무거움과 이별하고 싶을 때, Leave me와 함께
                    가벼워지세요.
                  </p>
                  <p className="product_li_tastes">Taste Note</p>
                  <p className="product_li_taste">
                    TOP: 상큼한 레몬밤과 레몬머틀
                  </p>
                  <p className="product_li_taste">
                    MID: 뒤이어 다가오는 사과의 달콤함
                  </p>
                  <p className="product_li_taste">
                    END: 은근하게 밀려오는 둥근 향의 팥과 비트
                  </p>
                  <p className="product_li_pkg mt-4">12ea / 1박스</p>

                  <div className="container p-0">
                    <div className="row mx-0">
                      <div className="col-xl-12 col-md-3 p-0">
                        <div className="product_li_price">
                          <p>14,900 원~</p>
                        </div>
                      </div>
                      <div className="col-xl-0 col-md-5 p-0"></div>
                      <div className="col-xl-12 col-md-4 d-flex align-items-end justify-content-between my-2 p-0">
                        <div className="product_btn w-100">
                          <div className="btn-per px-1 px-3">9% 할인</div>
                          <div className="btn-fir px-1">첫구매 추가할인</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product container mw-100">
            <div className="row d-flex justify-content-center">
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li col-xl-4 col-md-5 d-flex justify-content-center">
                <img
                  src="https://darlcha-store.s3.amazonaws.com/static/media/brightenme_home.71a01dc4.png"
                  className="product_li_image"
                  alt=""
                />
              </div>
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li_txt_box col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <div className="product_li_txt d-flex flex-column w-100">
                  <p className="product_li_titl">Brighten me - 생기를 되찾다</p>
                  <p className="product_li_des">
                    지친 순간 기분전환이 필요할 때, Brighten me와 함께 생기를
                    되찾으세요.
                  </p>
                  <p className="product_li_tastes">Taste Note</p>
                  <p className="product_li_taste">
                    TOP: 상큼한 레몬밤과 레몬머틀
                  </p>
                  <p className="product_li_taste">
                    MID: 뒤이어 다가오는 사과의 달콤함
                  </p>
                  <p className="product_li_taste">
                    END: 은근하게 밀려오는 둥근 향의 팥과 비트
                  </p>
                  <p className="product_li_pkg mt-4">12ea / 1박스</p>

                  <div className="container p-0">
                    <div className="row mx-0">
                      <div className="col-xl-12 col-md-3 p-0">
                        <div className="product_li_price">
                          <p>14,900 원~</p>
                        </div>
                      </div>
                      <div className="col-xl-0 col-md-5 p-0"></div>
                      <div className="col-xl-12 col-md-4 d-flex align-items-end justify-content-between my-2 p-0">
                        <div className="product_btn w-100">
                          <div className="btn-per px-1 px-3">9% 할인</div>
                          <div className="btn-fir px-1">첫구매 추가할인</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product container mw-100">
            <div className="row d-flex justify-content-center">
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li col-xl-4 col-md-5 d-flex justify-content-center">
                <img
                  src="https://darlcha-store.s3.amazonaws.com/static/media/lostinme_home.0cc0c010.png"
                  className="product_li_image"
                  alt=""
                />
              </div>
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li_txt_box col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <div className="product_li_txt d-flex flex-column w-100">
                  <p className="product_li_titl">Lost in me - 생각에 잠기다</p>
                  <p className="product_li_des">
                    하루 끝 나만의 시간이 필요할 때, Lost in me와 함께 사색에
                    잠겨보세요.
                  </p>
                  <p className="product_li_tastes">Taste Note</p>
                  <p className="product_li_taste">
                    TOP: 상큼한 레몬밤과 레몬머틀
                  </p>
                  <p className="product_li_taste">
                    MID: 뒤이어 다가오는 사과의 달콤함
                  </p>
                  <p className="product_li_taste">
                    END: 은근하게 밀려오는 둥근 향의 팥과 비트
                  </p>
                  <p className="product_li_pkg mt-4">12ea / 1박스</p>

                  <div className="container p-0">
                    <div className="row mx-0">
                      <div className="col-xl-12 col-md-3 p-0">
                        <div className="product_li_price">
                          <p>14,900 원~</p>
                        </div>
                      </div>
                      <div className="col-xl-0 col-md-5 p-0"></div>
                      <div className="col-xl-12 col-md-4 d-flex align-items-end justify-content-between my-2 p-0">
                        <div className="product_btn w-100">
                          <div className="btn-per px-1 px-3">9% 할인</div>
                          <div className="btn-fir px-1">첫구매 추가할인</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product container mw-100">
            <div className="row d-flex justify-content-center">
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li col-xl-4 col-md-5 d-flex justify-content-center">
                <img
                  src="https://darlcha-store.s3.amazonaws.com/static/media/teabundle_home.2e59047d.png"
                  className="product_li_image"
                  alt=""
                />
              </div>
              <div className="product_li col-xl-0 col-md"></div>
              <div className="product_li_txt_box col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <div className="product_li_txt d-flex flex-column w-100">
                  <p className="product_li_titl">달차 티백 3종 패키지</p>
                  <p className="product_li_des">
                    달차의 세 가지 프리미엄 티백을 한 번에 만나보세요. 전용
                    선물상자에 담아 전달해드립니다. Leave me, Brighten me, Lost
                    in me 각각 1박스씩 총 3박스로 구성된 패키지입니다.
                  </p>
                  <p className="product_li_tastes">Taste Note</p>

                  <p className="product_li_pkg mt-4">12ea / 1박스</p>

                  <div className="container p-0">
                    <div className="row mx-0">
                      <div className="col-xl-12 col-md-3 p-0">
                        <div className="product_li_price">
                          <p>39,600 원~</p>
                        </div>
                      </div>
                      <div className="col-xl-0 col-md-5 p-0"></div>
                      <div className="col-xl-12 col-md-4 d-flex align-items-end justify-content-between my-2 p-0">
                        <div className="product_btn w-100">
                          <div className="btn-per px-1 px-3">9% 할인</div>
                          <div className="btn-fir px-1">첫구매 추가할인</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
