import React from "react";

import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";

const LanguageOnePage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="justify-start w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[69%]">
                <Row className="font-ptsans items-end justify-center mb-[1px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[32%]">
                  <Text className="tab" as="h6" variant="h6">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark_25X25.svg"
                    className="checkmark2"
                    alt="checkmark"
                  />
                </Row>
                <Column className="font-ptsans items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[23%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text className="rownameandlocati1" as="h6" variant="h6">
                      Property setup
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                    </Row>
                  </Column>
                </Column>
                <Text
                  className="font-ptsanscaption lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] Photos2"
                  as="h6"
                  variant="h6"
                >
                  Photos
                </Text>
                <Text
                  className="font-ptsans lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[166px] lg:ml-[98px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] rownameandlocati1"
                  as="h6"
                  variant="h6"
                >
                  Pricing and calendar
                </Text>
              </Row>
              <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
            </Column>
          </Column>
          <Column className="justify-start xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[90px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[40%]">
            <Text className="Box1" as="h3" variant="h3">
              What language do you or your staff speak?
            </Text>
            <Stack className="lg:h-[405px] xl:h-[507px] 2xl:h-[570px] 3xl:h-[684px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[99%]">
              <Line className="absolute bg-gray_200_ce h-[1px] inset-x-[0] mx-[auto] top-[47%] w-[95%]" />
              <Column className="absolute bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Column className="justify-start lg:mb-[162px] xl:mb-[202px] 2xl:mb-[228px] 3xl:mb-[273px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[37%]">
                  <Column className="items-end justify-start w-[63%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Select language
                    </Text>
                    <Row className="items-center justify-between ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[93%]">
                      <Column className="items-center w-[23%]">
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center w-[100%]"
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
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
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
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
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
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
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
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbOutlineGray503"
                        >
                          <Img
                            src="images/img_vector_26X26.svg"
                            className="flex items-center justify-center"
                            alt="Vector Four"
                          />
                        </Button>
                      </Column>
                      <Column className="w-[71%]">
                        <Text className="Box1" as="h6" variant="h6">
                          Arabic
                        </Text>
                        <Text className="Maincard1" as="h6" variant="h6">
                          Cantonese
                        </Text>
                        <Text
                          className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] Box1"
                          as="h6"
                          variant="h6"
                        >
                          Chinese
                        </Text>
                        <Text className="Maincard1" as="h6" variant="h6">
                          English
                        </Text>
                        <Text
                          className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Box1"
                          as="h6"
                          variant="h6"
                        >
                          Malay
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[100%]">
                    <Text className="Addadditional">
                      Add additional languages
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Stack>
          </Column>
          <Line className="bg-gray_200_ce h-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[37%]" />
          <Row className="items-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
            <Stack className="bg-white_A700 border border-light_blue_800 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]">
              <Img
                src="images/img_arrowleft_26X26.svg"
                className="arrowleft1"
                alt="arrowleft"
              />
            </Stack>
            <Button
              className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_101 w-[87%]"
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

export default LanguageOnePage;
