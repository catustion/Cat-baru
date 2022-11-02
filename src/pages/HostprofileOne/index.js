import React from "react";

import { Column, Stack, Img, Row, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const HostprofileOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/photosimportphotosone");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
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
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[69%]">
                <Row className="items-end justify-center mb-[1px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[32%]">
                  <Text className="tab" as="h6" variant="h6">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark_25X25.svg"
                    className="checkmark2"
                    alt="checkmark"
                  />
                </Row>
                <Column className="items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[23%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text className="rownameandlocati1" as="h6" variant="h6">
                      Property setup
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                    </Row>
                  </Column>
                </Column>
                <Text className="Photos4" as="h6" variant="h6">
                  Photos
                </Text>
                <Text className="Pricingandcal4" as="h6" variant="h6">
                  Pricing and calendar
                </Text>
              </Row>
              <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
            </Column>
          </Column>
          <Text className="columnuser" as="h3" variant="h3">
            Host profile
          </Text>
          <Row className="items-start xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[66%]">
            <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[60%]">
              <Text className="Maincard3" variant="body1">
                Help your listing stand out by telling potential guests a bit
                more about yourself, your property and your neighbourhood. This
                information will be shown on your property page.
              </Text>
              <Row className="items-end lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] rounded-radius4 w-[25%]">
                <Button
                  className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  shape="icbRoundedBorder4"
                  size="smIcn"
                  variant="icbOutlineGray503"
                >
                  <Img
                    src="images/img_vector_26X26.svg"
                    className="flex items-center justify-center"
                    alt="Vector"
                  />
                </Button>
                <Text className="Property" variant="body1">
                  The property
                </Text>
              </Row>
              <Column className="justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius2 w-[96%]">
                <Text className="Aboutproperty" as="h6" variant="h6">
                  About the property
                </Text>
                <Column className="bg-white_A700 border border-gray_401 border-solid justify-end 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] p-[2px] rounded-radius2 w-[100%]">
                  <Text className="columnwhatmakesyour" variant="body1">
                    What makes your plans unique? What can guest expect?
                  </Text>
                  <Stack className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] lg:ml-[351px] xl:ml-[439px] 2xl:ml-[494px] 3xl:ml-[593px] lg:mt-[50px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]">
                    <Line className="absolute bg-bluegray_401 h-[2px] rotate-[45deg] w-[100%]" />
                    <Line className="absolute bg-bluegray_401 bottom-[0] h-[2px] right-[0] rotate-[45deg] lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]" />
                  </Stack>
                </Column>
              </Column>
              <Row className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] rounded-radius4 w-[20%]">
                <Button
                  className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  shape="icbRoundedBorder4"
                  size="smIcn"
                  variant="icbOutlineGray503"
                >
                  <Img
                    src="images/img_vector_26X26.svg"
                    className="flex items-center justify-center"
                    alt="Vector One"
                  />
                </Button>
                <Text className="Host" variant="body1">
                  The host
                </Text>
              </Row>
              <Row className="items-end lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[35%]">
                <Button
                  className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  shape="icbRoundedBorder4"
                  size="smIcn"
                  variant="icbOutlineGray503"
                >
                  <Img
                    src="images/img_vector_26X26.svg"
                    className="flex items-center justify-center"
                    alt="Vector Two"
                  />
                </Button>
                <Text className="Property" variant="body1">
                  The neighbourhood
                </Text>
              </Row>
              <Row className="items-end lg:mb-[38px] xl:mb-[48px] 2xl:mb-[54px] 3xl:mb-[64px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[59%]">
                <Button
                  className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                  shape="icbRoundedBorder4"
                  size="smIcn"
                  variant="icbOutlineGray503"
                >
                  <Img
                    src="images/img_vector_26X26.svg"
                    className="flex items-center justify-center"
                    alt="Vector Three"
                  />
                </Button>
                <Text className="None" variant="body1">
                  None of the above/I’ll add these later
                </Text>
              </Row>
            </Column>
            <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[38%]">
              <Column className="justify-start lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mt-[1px] w-[97%]">
                <Row className="items-start w-[100%]">
                  <Img
                    src="images/img_lightbulb_29X29.svg"
                    className="lightbulb8"
                    alt="lightbulb"
                  />
                  <Text className="rowlightbulb3" as="h5" variant="h5">
                    Can I make changes to my host profile later?
                  </Text>
                  <Img
                    src="images/img_close_29X29.svg"
                    className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                    alt="close"
                  />
                </Row>
                <Text className="columnlightbulb4" variant="body1">
                  If you’re no ready to add all of these details right now,
                  that’s okay. You can always change your host profile in the
                  extranet after you complete registration.
                </Text>
              </Column>
            </Column>
          </Row>
          <Line className="bg-gray_200_ce h-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[37%]" />
          <Row className="items-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
            <Stack className="bg-white_A700 border border-light_blue_800 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]">
              <Img
                src="images/img_arrowleft_26X26.svg"
                className="arrowleft1"
                alt="arrowleft"
              />
            </Stack>
            <Button
              className="common-pointer font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_101 w-[87%]"
              onClick={handleNavigate3}
              shape="RoundedBorder2"
              size="xl"
              variant="OutlineLightblue8001_2"
            >
              Continue
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default HostprofileOnePage;
