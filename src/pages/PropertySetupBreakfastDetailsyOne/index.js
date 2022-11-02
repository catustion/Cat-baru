import React from "react";

import { Column, Stack, Row, Text, Line, Img, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PropertySetupBreakfastDetailsyOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate16() {
    navigate("/parkingone");
  }
  function handleNavigate17() {
    navigate("/propertysetupbreakfastdetailsnone");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[111px] 2xl:pb-[125px] 3xl:pb-[150px] lg:pb-[88px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start mt-[1px] w-[100%]">
            <Stack className="font-ptsanscaption lg:h-[45px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] w-[100%]">
              <Column className="absolute bottom-[0] items-center justify-start pt-[2px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-start w-[47%]">
                    <Column className="items-center justify-start mt-[2px] w-[33%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Text
                          className="font-normal text-gray_501 w-[auto]"
                          variant="body2"
                        >
                          Property setup
                        </Text>
                        <Row className="items-center justify-evenly lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                          <Line className="bg-green_200 h-[3px] w-[13%]" />
                          <Line className="bg-green_200 h-[3px] w-[13%]" />
                          <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                          <Line className="bg-gray_502 h-[3px] w-[13%]" />
                          <Line className="bg-gray_502 h-[3px] w-[13%]" />
                          <Line className="bg-gray_502 h-[3px] w-[13%]" />
                          <Line className="bg-gray_502 h-[3px] w-[13%]" />
                        </Row>
                      </Column>
                    </Column>
                    <Text className="Photos2" variant="body2">
                      Photos
                    </Text>
                    <Text className="Pricingandcal2" variant="body2">
                      Pricing and calendar
                    </Text>
                  </Row>
                  <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
                </Column>
              </Column>
              <Row className="absolute font-ptsans h-[max-content] inset-y-[0] items-end justify-center left-[3%] my-[auto] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[22%]">
                <Text className="tab" as="h6" variant="h6">
                  Name and location
                </Text>
                <Img
                  src="images/img_checkmark_25X25.svg"
                  className="checkmark2"
                  alt="checkmark"
                />
              </Row>
            </Stack>
            <Text className="columnnameandlocati" as="h5" variant="h5">
              Breakfast details
            </Text>
            <Column className="font-ptsans items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[39%]">
              <Column className="bg-white_A700 justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] shadow-bs3 w-[100%]">
                <Column className="justify-start ml-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[35%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Do you serve breakfast?
                  </Text>
                  <Img
                    src="images/img_radio.png"
                    className="Radio"
                    alt="Radio"
                  />
                  <Img
                    src="images/img_no.png"
                    className="common-pointer No"
                    onClick={handleNavigate17}
                    alt="No"
                  />
                </Column>
                <Text className="Maincard" as="h6" variant="h6">
                  Is breakfast included in the price guests pay?
                </Text>
                <Img
                  src="images/img_radio_22X152.png"
                  className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] ml-[3px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[29%]"
                  alt="Radio One"
                />
                <Img
                  src="images/img_radio_22X151.png"
                  className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] ml-[3px] w-[29%]"
                  alt="Radio Two"
                />
                <Line className="bg-gray_700_33 h-[1.5px] ml-[3px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]" />
                <Column className="items-center justify-start ml-[3px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] rounded-radius501 w-[88%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="Whattypeofbr" as="h6" variant="h6">
                      What type of breakfasts do you offer?
                    </Text>
                    <Text className="Selectallthat" variant="body4">
                      Select all that apply
                    </Text>
                    <Row className="font-ptsans items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[19%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        A la carte
                      </Button>
                      <Button
                        className="font-bold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[19%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        American
                      </Button>
                      <Button
                        className="font-bold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[14%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Asian
                      </Button>
                      <Button
                        className="font-bold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[25%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Breakfast to go
                      </Button>
                      <Button
                        className="font-bold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[14%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Buffet
                      </Button>
                    </Row>
                    <Row className="font-ptsans items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[20%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Continental
                      </Button>
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[27%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Full English/Irish
                      </Button>
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[12%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Halal
                      </Button>
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[14%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Italian
                      </Button>
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[20%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Gluten-free
                      </Button>
                    </Row>
                    <Row className="font-ptsans items-center lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[53%]">
                      <Button
                        className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[27%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Kosher
                      </Button>
                      <Button
                        className="font-bold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[26%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Vegan
                      </Button>
                      <Button
                        className="font-bold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[34%]"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray502"
                      >
                        Vegetarian
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[39%]" />
            <Row className="font-ptsans items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack className="bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
                <Img
                  src="images/img_arrowleft_14X7.svg"
                  className="arrowleft2"
                  alt="arrowleft"
                />
              </Stack>
              <Button
                className="common-pointer font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                onClick={handleNavigate16}
                size="xl"
                variant="OutlineLightblue8001_2"
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

export default PropertySetupBreakfastDetailsyOnePage;
