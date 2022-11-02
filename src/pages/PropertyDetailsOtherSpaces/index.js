import React from "react";

import { Column, Stack, Img, Row, Text, Line, List, Button } from "components";
import { useNavigate } from "react-router-dom";

const PropertyDetailsOtherSpacesPage = () => {
  const navigate = useNavigate();

  function handleNavigate62() {
    navigate("/propertysetuppropertydetails");
  }
  function handleNavigate63() {
    navigate("/propertysetuppropertydetails");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans justify-start mx-[auto] lg:pb-[118px] xl:pb-[147px] 2xl:pb-[166px] 3xl:pb-[199px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[90px] w-[100%]">
            <Img src="images/img_user.svg" className="user" alt="user" />
            <Row className="absolute bg-indigo_900 items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
              <Row className="items-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] w-[94%]">
                <Text className="HalalHoliday" as="h1" variant="h1">
                  HalalHoliday
                </Text>
                <Column className="items-center justify-start lg:ml-[392px] xl:ml-[491px] 2xl:ml-[552px] 3xl:ml-[662px] w-[22%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="font-ptsans items-center justify-end ml-[auto] w-[64%]">
                      <Text
                        className="font-bold text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Name’s Property
                      </Text>
                      <Img
                        src="images/img_arrow1.svg"
                        className="ArrowOne"
                        alt="ArrowOne"
                      />
                    </Row>
                    <Text className="columnnamesproperty" variant="body4">
                      122 Jalan Abc, Johor Bahru, Johor 8350...{" "}
                    </Text>
                  </Column>
                </Column>
                <Img
                  src="images/img_minimize.svg"
                  className="minimize"
                  alt="minimize"
                />
                <Text className="Help" as="h5" variant="h5">
                  Help
                </Text>
                <Img
                  src="images/img_question.svg"
                  className="question"
                  alt="question"
                />
                <Img
                  src="images/img_user.svg"
                  className="user_One"
                  alt="user One"
                />
              </Row>
            </Row>
          </Stack>
          <Column className="items-center justify-start mt-[1px] w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[69%]">
                <Row className="font-ptsans items-end justify-center xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[31%]">
                  <Text className="tab" as="h6" variant="h6">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark_25X25.svg"
                    className="checkmark2"
                    alt="checkmark"
                  />
                </Row>
                <Column className="font-ptsanscaption items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[23%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text
                      className="font-normal text-gray_501 w-[auto]"
                      variant="body2"
                    >
                      Property setup
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                      <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                    </Row>
                  </Column>
                </Column>
                <Text
                  className="font-ptsanscaption lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] Photos2"
                  variant="body2"
                >
                  Photos
                </Text>
                <Text
                  className="font-normal font-ptsanscaption lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_501 w-[auto]"
                  variant="body2"
                >
                  Pricing and calendar
                </Text>
              </Row>
              <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
            </Column>
          </Column>
        </Column>
        <Column className="font-ptsanscaption items-center justify-start xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[40%]">
          <Column className="justify-start w-[100%]">
            <Text className="columnotherspaces" as="h5" variant="h5">
              Other Spaces
            </Text>
            <Stack className="lg:h-[348px] xl:h-[435px] 2xl:h-[489px] 3xl:h-[586px] ml-[3px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[99%]">
              <Column className="absolute bg-white_A700 justify-start left-[0] lg:py-[20px] xl:py-[25px] 2xl:py-[29px] 3xl:py-[34px] shadow-bs3 w-[100%]">
                <Column className="items-center justify-start lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[61%]">
                  <Text
                    className="font-normal text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Which beds are available in this room?
                  </Text>
                </Column>
                <Column className="justify-start lg:mb-[18px] xl:mb-[23px] 2xl:mb-[26px] 3xl:mb-[31px] 3xl:mt-[117px] lg:mt-[69px] xl:mt-[87px] 2xl:mt-[98px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listcar">
                      <Img src="images/img_car.svg" className="car" alt="car" />
                      <Row className="items-start justify-between lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[1px] w-[83%]">
                        <Column className="justify-start mt-[3px] pt-[3px] w-[28%]">
                          <Column className="items-center justify-start w-[72%]">
                            <Text
                              className="font-normal text-black_900 w-[auto]"
                              variant="body2"
                            >
                              Double bed
                            </Text>
                          </Column>
                          <Text className="columndoublebed" variant="body4">
                            131 - 150 cm wide
                          </Text>
                        </Column>
                        <Stack className="bg-white_A700 font-ptsans lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[29%]">
                          <Img
                            src="images/img_button.svg"
                            className="button"
                            alt="button"
                          />
                          <Text className="One" variant="body2">
                            0
                          </Text>
                        </Stack>
                      </Row>
                    </Row>
                    <Row className="bg-white_A700 items-start lg:my-[25px] xl:my-[32px] 2xl:my-[36px] 3xl:my-[43px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] w-[100%]">
                      <Img
                        src="images/img_car.svg"
                        className="car_One"
                        alt="car One"
                      />
                      <Row className="items-start justify-between lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] pb-[1px] w-[84%]">
                        <Column className="justify-start mt-[3px] pr-[4px] pt-[4px] w-[64%]">
                          <Column className="items-center justify-start ml-[1px] w-[97%]">
                            <Text className="Sofa" variant="body2">
                              Extra-large double bed(Super-king size
                            </Text>
                          </Column>
                          <Text className="columnextralargedou" variant="body4">
                            181 - 210 cm wide
                          </Text>
                        </Column>
                        <Stack className="bg-white_A700 font-ptsans lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[29%]">
                          <Img
                            src="images/img_button.svg"
                            className="button"
                            alt="button One"
                          />
                          <Text className="One" variant="body2">
                            0
                          </Text>
                        </Stack>
                      </Row>
                    </Row>
                  </List>
                  <Row className="font-ptsans items-start lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[21%]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="arrowright"
                      alt="arrowright"
                    />
                    <Text className="Moreoption" variant="body4">
                      More bed options
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Row className="absolute bg-white_A700 bottom-[40%] inset-x-[0] items-center xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                <Img src="images/img_car.svg" className="car" alt="car Two" />
                <Row className="items-start justify-between lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[1px] w-[83%]">
                  <Column className="justify-start mt-[3px] pr-[4px] pt-[4px] w-[38%]">
                    <Column className="items-center justify-start w-[96%]">
                      <Text
                        className="font-normal text-black_900 w-[auto]"
                        variant="body2"
                      >
                        Large bed(King size)
                      </Text>
                    </Column>
                    <Text className="columndoublebed" variant="body4">
                      151 - 180 cm wide
                    </Text>
                  </Column>
                  <Stack className="bg-white_A700 font-ptsans lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[29%]">
                    <Img
                      src="images/img_button.svg"
                      className="button"
                      alt="button Two"
                    />
                    <Text className="One" variant="body2">
                      0
                    </Text>
                  </Stack>
                </Row>
              </Row>
              <Column className="absolute bg-white_A700 inset-x-[0] items-center justify-end xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] top-[15%] w-[100%]">
                <Row className="items-start mt-[1px] w-[94%]">
                  <Img src="images/img_bag.svg" className="bag" alt="bag" />
                  <Column className="justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[3px] pt-[3px] w-[23%]">
                    <Column className="items-center justify-start w-[71%]">
                      <Text
                        className="font-normal text-black_900 w-[auto]"
                        variant="body2"
                      >
                        Single bed
                      </Text>
                    </Column>
                    <Text className="columndoublebed" variant="body4">
                      90 - 130 cm wide
                    </Text>
                  </Column>
                  <Stack className="bg-white_A700 font-ptsans lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[142px] xl:ml-[177px] 2xl:ml-[200px] 3xl:ml-[240px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[26%]">
                    <Img
                      src="images/img_button.svg"
                      className="button"
                      alt="button Three"
                    />
                    <Text className="One" variant="body2">
                      0
                    </Text>
                  </Stack>
                </Row>
              </Column>
            </Stack>
            <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[99%]" />
            <Row className="font-ptsans items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]">
              <Button
                className="flex items-center justify-center text-center w-[25%]"
                onClick={handleNavigate62}
                leftIcon={
                  <Img
                    src="images/img_arrowleft_14X7.svg"
                    className="text-center lg:w-[4px] lg:mr-[4px] xl:w-[6px] xl:mr-[6px] 2xl:w-[7px] 2xl:mr-[7px] 3xl:w-[8px] 3xl:mr-[8px]"
                    alt="arrow_left"
                  />
                }
                size="xl"
                variant="OutlineLightblue800"
              >
                <div className="common-pointer bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Cancel
                </div>
              </Button>
              <Button
                className="common-pointer font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[72%]"
                onClick={handleNavigate63}
                size="xl"
                variant="OutlineLightblue8001_2"
              >
                Save
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertyDetailsOtherSpacesPage;
