import React from "react";

import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PropertySetupPropertyDetailsOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate42() {
    navigate("/propertydetailsotherspacesone");
  }
  function handleNavigate43() {
    navigate("/propertydetailslivingroom");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] 3xl:pb-[105px] lg:pb-[62px] xl:pb-[78px] 2xl:pb-[88px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="justify-start mt-[1px] w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[68%]">
                <Row className="items-end justify-center xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[32%]">
                  <Text className="tab" as="h6" variant="h6">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="checkmark2"
                    alt="checkmark"
                  />
                </Row>
                <Column className="items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[23%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnpropertysetup" variant="body2">
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
                <Text className="Photos" variant="body2">
                  Photos
                </Text>
                <Text className="Pricingandcal" variant="body2">
                  Pricing and calendar
                </Text>
              </Row>
              <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
            </Column>
          </Column>
          <Column className="items-center justify-start xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] p-[3px] w-[40%]">
            <Column className="justify-start lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Property Details
              </Text>
              <Column className="bg-white_A700 items-center justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] shadow-bs3 w-[100%]">
                <Column className="justify-start mb-[3px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                  <Column className="items-center justify-start w-[37%]">
                    <Text className="Box1" as="h6" variant="h6">
                      Where can people sleep?
                    </Text>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                    <Column className="bg-white_A700 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs5 w-[87%]">
                      <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[20%]">
                        <Text className="columneachpropertyw" variant="body2">
                          Bedroom 1
                        </Text>
                        <Text
                          className="font-normal font-ptsanscaption lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_501 w-[auto]"
                          variant="body4"
                        >
                          1 double bed
                        </Text>
                      </Column>
                    </Column>
                    <Img
                      src="images/img_antdesignminu.svg"
                      className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                      alt="antdesignminu"
                    />
                  </Row>
                  <Column
                    className="common-pointer bg-white_A700 justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs5 w-[87%]"
                    onClick={handleNavigate43}
                  >
                    <Column className="justify-start ml-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[19%]">
                      <Text className="Box1" variant="body2">
                        Living Room
                      </Text>
                      <Text className="weburl_Two" variant="body4">
                        0 beds
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="common-pointer bg-white_A700 justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs5 w-[87%]"
                    onClick={handleNavigate42}
                  >
                    <Column className="justify-start ml-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[20%]">
                      <Text className="Box1" variant="body2">
                        Other spaces
                      </Text>
                      <Text className="weburl_Two" variant="body4">
                        0 beds
                      </Text>
                    </Column>
                  </Column>
                  <Row className="items-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[19%]">
                    <Img
                      src="images/img_plus.svg"
                      className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="plus"
                    />
                    <Text className="AddBedroom" variant="body5">
                      Add bedroom
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-end xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] shadow-bs3 w-[100%]">
                <Column className="justify-start ml-[3px] mt-[3px] w-[42%]">
                  <Text className="Box1" variant="body2">
                    How many guests can stay?
                  </Text>
                  <Stack className="bg-white_A700 lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[59%]">
                    <Img
                      src="images/img_button.svg"
                      className="button"
                      alt="button"
                    />
                    <Text className="One" variant="body2">
                      1
                    </Text>
                  </Stack>
                  <Text
                    className="lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] Box1"
                    variant="body2"
                  >
                    How many bathrooms are there?
                  </Text>
                  <Stack className="bg-white_A700 lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[59%]">
                    <Img
                      src="images/img_button.svg"
                      className="button"
                      alt="button One"
                    />
                    <Text className="One" variant="body2">
                      1
                    </Text>
                  </Stack>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs3 w-[100%]">
                <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mt-[1px] w-[68%]">
                  <Column className="justify-start w-[52%]">
                    <Text className="Box1" variant="body2">
                      How big is this apartment?
                    </Text>
                    <Text
                      className="font-bold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-black_900 w-[auto]"
                      variant="body3"
                    >
                      Apartment size - optional
                    </Text>
                  </Column>
                  <Row className="items-center justify-evenly lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                    <div className="bg-white_A700 border-black_900 border-bw05 border-solid lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] rounded-radius3 w-[59%]"></div>
                    <Img
                      src="images/img_select.png"
                      className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] rounded-radius3 w-[41%]"
                      alt="Select"
                    />
                  </Row>
                </Column>
              </Column>
              <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
              <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Stack className="bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
                  <Img
                    src="images/img_arrowleft_14X7.svg"
                    className="arrowleft2"
                    alt="arrowleft"
                  />
                </Stack>
                <Button
                  className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                  size="xl"
                  variant="OutlineLightblue8001_2"
                >
                  Continue
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertySetupPropertyDetailsOnePage;
