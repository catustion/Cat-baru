import React from "react";

import { Column, Text, Row, Line, Input, Stack, Img, Button } from "components";
import Header2 from "components/Header/Header2";
import { useNavigate } from "react-router-dom";

const NameLocation1stPageOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate29() {
    navigate("/namelocation2ndpageone");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[111px] 2xl:pb-[125px] 3xl:pb-[150px] lg:pb-[88px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header2 className="w-[100%]" />
          <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
            <Column className="justify-start pt-[2px] w-[100%]">
              <Column className="items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[20%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text className="columnnameandlocati1" variant="body2">
                    Name and location
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                    <Line className="bg-light_blue_800 h-[4px] w-[32%]" />
                    <Line className="bg-bluegray_400 h-[4px] w-[32%]" />
                    <Line className="bg-bluegray_400 h-[4px] w-[32%]" />
                  </Row>
                </Column>
              </Column>
              <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            </Column>
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[77px] xl:mt-[96px] w-[65%]">
              <Column className="w-[60%]">
                <Text
                  className="not-italic text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  What’s the name of your place?
                </Text>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Column className="bg-white_A700 justify-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] shadow-bs3 w-[100%]">
                    <Text className="Maincard1" as="h6" variant="h6">
                      Property name
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_400 Group166"
                      wrapClassName="2xl:mb-[323px] 2xl:mt-[5px] 3xl:mb-[387px] 3xl:mt-[6px] lg:mb-[229px] lg:mt-[3px] w-[100%] xl:mb-[287px] xl:mt-[4px]"
                      type="text"
                      name="Group166"
                      placeholder="Property name"
                      shape="RoundedBorder3"
                      size="sm"
                      variant="OutlineGray700"
                    ></Input>
                  </Column>
                </Column>
                <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Stack className="bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
                    <Img
                      src="images/img_arrowleft_14X7.svg"
                      className="arrowleft2"
                      alt="arrowleft"
                    />
                  </Stack>
                  <Button
                    className="common-pointer font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                    onClick={handleNavigate29}
                    size="xl"
                    variant="OutlineLightblue8001_2"
                  >
                    Continue
                  </Button>
                </Row>
              </Column>
              <Column className="items-center lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[36%]">
                <Column className="bg-white_A700 items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] shadow-bs3 w-[100%]">
                  <Column className="justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] w-[98%]">
                    <Row className="items-start w-[100%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="bookmark"
                        alt="thumbsup"
                      />
                      <Text className="rowthumbsup" as="h6" variant="h6">
                        What should I consider when choosing a name?
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] close_One2"
                        alt="close"
                      />
                    </Row>
                    <Stack className="lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[56%]">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] left-[0] top-[4%] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute bottom-[2%] lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] left-[0] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc One"
                      />
                      <Row className="absolute items-center w-[100%]">
                        <Img
                          src="images/img_akariconscirc.svg"
                          className="lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                          alt="akariconscirc Two"
                        />
                        <Text className="rowakariconscirc_two" variant="body3">
                          Keep it short and catchy
                          <br />
                          Avoid abbreviations
                          <br />
                          Stick to the facts
                        </Text>
                      </Row>
                    </Stack>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs3 w-[100%]">
                  <Column className="items-center justify-start lg:mb-[16px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mt-[2px] w-[98%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className="lightbulb"
                        alt="lightbulb"
                      />
                      <Text className="rowlightbulb" as="h6" variant="h6">
                        Why do I need to name my property?
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="close_One2"
                        alt="close One"
                      />
                    </Row>
                    <Text className="columnlightbulb" variant="body3">
                      This is the name that will appear as the title of your
                      listing on our site. It should tell guests something
                      specific about your place, where it is or what you offer.
                      This will be visible to anyone visiting our site, so don’t
                      include your address in the name{" "}
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default NameLocation1stPageOnePage;
