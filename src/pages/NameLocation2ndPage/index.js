import React from "react";

import {
  Column,
  Text,
  Row,
  Line,
  Stack,
  SelectBox,
  Img,
  Input,
  Button,
} from "components";
import Header2 from "components/Header/Header2";
import { useNavigate } from "react-router-dom";

const NameLocation2ndPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate65() {
    navigate("/namelocation1stpage");
  }
  function handleNavigate66() {
    navigate("/namelocation3rdpage");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[25px] xl:pb-[32px] 2xl:pb-[36px] 3xl:pb-[43px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header2 className="w-[100%]" />
          <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="justify-start pt-[2px] w-[100%]">
                <Column className="items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[20%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text className="columnnameandlocati1" variant="body2">
                      Name and location
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Line className="bg-green_201 h-[4px] w-[32%]" />
                      <Line className="bg-light_blue_800 h-[4px] w-[32%]" />
                      <Line className="bg-bluegray_400 h-[4px] w-[32%]" />
                    </Row>
                  </Column>
                </Column>
                <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
              </Column>
            </Column>
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] w-[65%]">
              <Column className="w-[60%]">
                <Text
                  className="not-italic text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Where is the property you’re listing?
                </Text>
                <Stack className="lg:h-[476px] xl:h-[595px] 2xl:h-[669px] 3xl:h-[803px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Line className="absolute bg-gray_700_33 bottom-[49%] h-[0.5px] top-[51%] w-[100%]" />
                  <Column className="absolute items-center justify-start w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="bg-white_A700 justify-start lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] shadow-bs3 w-[100%]">
                        <Text
                          className="font-normal leading-[normal] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-black_900 w-[96%]"
                          variant="body2"
                        >
                          We may send a letter to confirm the location of your
                          property, so make sure that the address is correct -
                          it’s difficult to make changes to it later.
                        </Text>
                        <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[99%]">
                          <Text className="Box1" as="h6" variant="h6">
                            Country/region
                          </Text>
                          <SelectBox
                            className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 w-[100%]"
                            placeholderClassName="text-bluegray_400"
                            name="GroupEightyOne"
                            placeholder="Select country"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_6X10.svg"
                                className="lg:w-[7px] lg:h-[5px] lg:mr-[8px] xl:w-[8px] xl:h-[6px] xl:mr-[10px] 2xl:w-[10px] 2xl:h-[7px] 2xl:mr-[12px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[14px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                            size="md"
                            variant="OutlineGray700"
                          ></SelectBox>
                        </Column>
                        <Column className="items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] 3xl:pb-[10px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] w-[99%]">
                          <Column className="justify-start pt-[2px] rounded-radius2 w-[100%]">
                            <Text className="Box1" as="h6" variant="h6">
                              Street name and house number
                            </Text>
                            <Input
                              className="placeholder:text-bluegray_400 Group166"
                              wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[7px]"
                              name="GroupEightyTwo"
                              placeholder="Start typing your address"
                              shape="RoundedBorder3"
                              size="md"
                              variant="OutlineGray700"
                            ></Input>
                          </Column>
                        </Column>
                        <Text
                          className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-light_blue_800 w-[auto]"
                          variant="body4"
                        >
                          Add apartment or floor number (optional)
                        </Text>
                        <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius2 w-[43%]">
                          <Text className="Box1" as="h6" variant="h6">
                            Post Code
                          </Text>
                          <Input
                            className="placeholder:text-bluegray_400 Group166"
                            wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                            name="GroupEighty"
                            placeholder="Post code"
                            shape="RoundedBorder3"
                            size="md"
                            variant="OutlineGray700"
                          ></Input>
                        </Column>
                        <Column className="justify-start lg:mb-[30px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[51px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius2 w-[99%]">
                          <Text className="Box1" as="h6" variant="h6">
                            City
                          </Text>
                          <Input
                            className="placeholder:text-bluegray_400 Group166"
                            wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                            name="language One"
                            placeholder=" City"
                            shape="RoundedBorder3"
                            size="md"
                            variant="OutlineGray700"
                          ></Input>
                        </Column>
                      </Column>
                      <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]" />
                      <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                        <Stack
                          className="common-pointer bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                          onClick={handleNavigate65}
                        >
                          <Img
                            src="images/img_arrowleft_14X7.svg"
                            className="arrowleft2"
                            alt="arrowleft"
                          />
                        </Stack>
                        <Button
                          className="common-pointer font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                          onClick={handleNavigate66}
                          size="xl"
                          variant="OutlineLightblue8001_2"
                        >
                          Continue
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </Column>
              <Column className="items-center lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[36%]">
                <Column className="bg-white_A700 items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] shadow-bs3 w-[100%]">
                  <Column className="justify-start lg:mb-[36px] xl:mb-[46px] 2xl:mb-[52px] 3xl:mb-[62px] w-[98%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="bookmark"
                        alt="thumbsup"
                      />
                      <Text className="rowthumbsup1" as="h6" variant="h6">
                        What need to be included in my address?
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="close_One2"
                        alt="close"
                      />
                    </Row>
                    <Column className="items-center justify-start lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[78%]">
                      <Text className="Thingstoconsi" variant="body2">
                        Include both your street name and house number
                        <br />
                        Provide an apartment or floor number if you have one
                        <br />
                        Provide the post/zip code
                        <br />
                        Correctly spell the street name
                        <br />
                        Use the physical address of the property, not your
                        office or home address
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs3 w-[100%]">
                  <Column className="items-center justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] mt-[2px] w-[98%]">
                    <Row className="items-start w-[100%]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className="lightbulb"
                        alt="lightbulb"
                      />
                      <Text className="rowlightbulb1" as="h6" variant="h6">
                        Why do I need add my address?
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] close_One2"
                        alt="close One"
                      />
                    </Row>
                    <Text className="columnlightbulb1" variant="body2">
                      Once a guest books your property, this is the address that
                      will be shared with them. It’s important that is it
                      correct so that guests can easily find your property.
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

export default NameLocation2ndPagePage;
