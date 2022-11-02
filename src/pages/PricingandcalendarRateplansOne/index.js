import React from "react";

import { Column, Row, List, Text, Img, Button, Line, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarRateplansOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/pricingandcalendarpricepernightone");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="font-roboto justify-start mt-[4px] w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
              <List
                className="font-ptsans gap-[0] grid grid-cols-3 min-h-[auto] w-[57%]"
                orientation="horizontal"
              >
                <Row className="listnameandlocati">
                  <Text className="rownameandlocati" variant="body2">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="TikTokVerified"
                    alt="TikTokVerified"
                  />
                </Row>
                <Row className="listnameandlocati">
                  <Text className="rowpropertysetup" variant="body2">
                    Property Setup
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="TikTokVerified_One"
                    alt="TikTokVerified One"
                  />
                </Row>
                <Row className="listnameandlocati">
                  <Text className="rowphotos" variant="body2">
                    Photos
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="TikTokVerified_Two"
                    alt="TikTokVerified Two"
                  />
                </Row>
              </List>
              <Column className="bg-gray_50 font-ptsans items-center pl-[1px] py-[1px] shadow-bs w-[19%]">
                <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[99%]">
                  <Text className="Box1" variant="body2">
                    Pricing and calendar
                  </Text>
                  <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-blue_A200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-gray_503 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                  </Row>
                </Column>
              </Column>
              <Button
                className="font-hairline lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                size="2xl"
                variant="OutlineBlack90026"
              >
                Review and complete
              </Button>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
            </Row>
            <Column className="font-ptsans justify-start xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[41%]">
              <Text className="Box1" as="h4" variant="h4">
                Rate plans
              </Text>
              <Column className="bg-white_A700 items-center justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                <Text className="columndescription4" variant="body1">
                  To attract a wider range of guests, we suggest setting up
                  multiple rate plans. The recommended prices and policies for
                  each plan are based on data from properties like yours, but
                  they can be edited now or after you complete registration.
                </Text>
              </Column>
            </Column>
            <Row className="font-ptsans items-start justify-between xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[86%]">
              <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[48%]">
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Standard rate plan
                </Text>
                <Column className="bg-white_A700 items-center justify-end lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                  <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[97%]">
                    <Row className="bg-green_50 items-center justify-end ml-[1px] px-[2px] w-[37%]">
                      <Img
                        src="images/img_combochart.png"
                        className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[13%]"
                        alt="ComboChart"
                      />
                      <Text className="rowcombochart" variant="body3">
                        High impact on bookings
                        <br />
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[92%]">
                      <Text className="rowcancellationpo" as="h5" variant="h5">
                        Cancellation policy
                      </Text>
                      <Img
                        src="images/img_about.png"
                        className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                        alt="About"
                      />
                      <Button
                        className="font-normal lg:ml-[189px] xl:ml-[237px] 2xl:ml-[267px] 3xl:ml-[320px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]"
                        size="md"
                        variant="OutlineLightblue5001_2"
                      >
                        Edit
                      </Button>
                    </Row>
                    <Text
                      className="font-normal leading-[normal] ml-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-black_900 w-[91%]"
                      variant="body2"
                    >
                      You’re 91% more likely to get bookings with the
                      pre-selected cancellation policy settings than with a
                      30-day cancellation policy
                    </Text>
                    <Row className="items-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[88%]">
                      <Img
                        src="images/img_checkmark_30X35.png"
                        className="Checkmark"
                        alt="Checkmark"
                      />
                      <Text className="rowcheckmark" variant="body2">
                        Guests can cancel their bookings for free up to 1 day
                        before their arrival
                      </Text>
                    </Row>
                    <Row className="items-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[89%]">
                      <Img
                        src="images/img_checkmark_30X35.png"
                        className="Checkmark"
                        alt="Checkmark One"
                      />
                      <Text className="rowcheckmark_one" variant="body2">
                        Guests who cancel within 24 hours will have their
                        cancellation fee waived
                      </Text>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]" />
                    <Row className="bg-green_50 items-center justify-end ml-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] w-[37%]">
                      <Img
                        src="images/img_combochart.png"
                        className="combochartico"
                        alt="ComboChart One"
                      />
                      <Text className="rowcombochart_one" variant="body3">
                        High impact on bookings
                        <br />
                      </Text>
                    </Row>
                    <Row className="items-end ml-[2px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[92%]">
                      <Text className="rowpricepergroup" as="h5" variant="h5">
                        Price per group size
                        <br />
                        <br />
                        <br />
                      </Text>
                      <Img
                        src="images/img_about.png"
                        className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[3px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                        alt="About One"
                      />
                      <Button
                        className="font-light font-roboto lg:ml-[185px] xl:ml-[232px] 2xl:ml-[261px] 3xl:ml-[313px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]"
                        size="md"
                        variant="OutlineLightblue5001_2"
                      >
                        Edit
                      </Button>
                    </Row>
                    <Text
                      className="font-normal leading-[normal] ml-[1px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] not-italic text-black_900 w-[84%]"
                      variant="body3"
                    >
                      You’re 12% more likely to get bookings if you set lower
                      prices for smaller groups of guests
                    </Text>
                    <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[45%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Occupancy
                      </Text>
                      <Text
                        className="font-bold 3xl:ml-[110px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[92px] text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Guest pay
                      </Text>
                    </Row>
                    <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[45%]">
                      <Stack className="3xl:h-[117px] lg:h-[69px] xl:h-[87px] 2xl:h-[98px] w-[19%]">
                        <Img
                          src="images/img_contacts.png"
                          className="absolute lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] top-[0] w-[100%]"
                          alt="Contacts"
                        />
                        <Img
                          src="images/img_contacts.png"
                          className="absolute bottom-[0] lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] w-[100%]"
                          alt="Contacts One"
                        />
                      </Stack>
                      <Column className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[79%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text
                            className="font-inter font-light text-black_900 w-[auto]"
                            variant="body2"
                          >
                            X 2
                          </Text>
                          <Text
                            className="font-ptsans columntellusaboutt"
                            variant="body1"
                          >
                            MYR 72.00
                          </Text>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                          <Text
                            className="font-inter font-light mt-[2px] text-black_900 w-[auto]"
                            variant="body2"
                          >
                            X 1
                          </Text>
                          <Text
                            className="mb-[1px] columneachpropertyw"
                            variant="body1"
                          >
                            MYR 64.80
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-blue_50 font-roboto items-end justify-start p-[3px] shadow-bs w-[24%]">
                <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] mt-[2px] w-[95%]">
                  <Row className="items-start justify-between ml-[4px] w-[99%]">
                    <Text className="rowdescription" variant="body4">
                      Is there anything preventing you from <br />
                      completing your registration at this <br />
                      point?
                    </Text>
                    <Img
                      src="images/img_multiply.png"
                      className="Multiply"
                      alt="Multiply"
                    />
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[42%]"
                    size="xl"
                    variant="OutlineLightblue500"
                  >
                    Let us know
                  </Button>
                </Column>
              </Column>
            </Row>
            <Column className="font-ptsans justify-start xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[41%]">
              <Text
                className="font-bold text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Non-refundable rate plan
              </Text>
              <Column className="bg-white_A700 justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] w-[92%]">
                  <Row className="items-center w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cancellation policy
                    </Text>
                    <Img
                      src="images/img_about.png"
                      className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                      alt="About Two"
                    />
                    <Button
                      className="font-normal lg:ml-[193px] xl:ml-[241px] 2xl:ml-[272px] 3xl:ml-[326px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]"
                      size="md"
                      variant="OutlineLightblue5001_2"
                    >
                      Edit
                    </Button>
                  </Row>
                  <Column className="items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[85%]">
                    <Row className="items-start w-[100%]">
                      <Img
                        src="images/img_checkmark_30X35.png"
                        className="Checkmark_Two"
                        alt="Checkmark Two"
                      />
                      <Text className="rowcheckmark_two" variant="body2">
                        Guests will pay 10% less than the standard rate for a
                        non-refundable rate
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]">
                      <Img
                        src="images/img_checkmark_30X35.png"
                        className="Checkmark_Two"
                        alt="Checkmark Three"
                      />
                      <Text className="rowcheckmark_three" variant="body2">
                        Guests cannot cancel their bookings for free at any time
                        <br />
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="font-ptsans justify-start xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[42%]">
              <Text
                className="font-bold text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Weekly rate plan
              </Text>
              <Column className="bg-white_A700 justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[99%]">
                <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[1px] w-[93%]">
                  <Row className="bg-green_50 items-center justify-end ml-[2px] px-[4px] w-[40%]">
                    <Img
                      src="images/img_combochart.png"
                      className="combochartico"
                      alt="ComboChart Two"
                    />
                    <Text className="rowcombochart_two" variant="body3">
                      High impact on bookings
                      <br />
                    </Text>
                  </Row>
                  <Row className="items-start ml-[2px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[53%]">
                    <Text className="rowcancellationpo" as="h5" variant="h5">
                      Price and cancellation policy
                    </Text>
                    <Img
                      src="images/img_about.png"
                      className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[2px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                      alt="About Three"
                    />
                  </Row>
                  <Text className="columncombochart_two" variant="body3">
                    You’re 16% more likely to get bookings with the 15%
                    pre-selected weekly rate than with none
                    <br />
                  </Text>
                  <Row className="items-start xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[97%]">
                    <Img
                      src="images/img_checkmark_30X35.png"
                      className="Checkmark"
                      alt="Checkmark Four"
                    />
                    <Text className="rowcheckmark_four" variant="body2">
                      Guests will pay 15% less than the standard rate when they
                      book for at least 7 nights
                    </Text>
                  </Row>
                  <Row className="items-start xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[94%]">
                    <Img
                      src="images/img_checkmark_30X35.png"
                      className="Checkmark"
                      alt="Checkmark Five"
                    />
                    <Text className="rowcheckmark_five" variant="body2">
                      Guests can cancel their bookings for free up to 1 day
                      before their arrival (based on the standard rate
                      cancellation policy)
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]" />
            </Column>
            <Row
              className="common-pointer font-ptsans items-center xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[42%]"
              onClick={handleNavigate10}
            >
              <Stack className="bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]">
                <Img
                  src="images/img_expandarrow.png"
                  className="ExpandArrow"
                  alt="ExpandArrow"
                />
              </Stack>
              <Button
                className="font-bold lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                size="xl"
                variant="FillLightblue800"
              >
                Continue
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PricingandcalendarRateplansOnePage;
