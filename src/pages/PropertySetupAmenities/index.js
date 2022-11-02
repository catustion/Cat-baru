import React from "react";

import { Column, Stack, Row, Text, Line, Img, Button } from "components";
import Header from "components/Header/Header";

const PropertySetupAmenitiesPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[45px] xl:pb-[56px] 2xl:pb-[64px] 3xl:pb-[76px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="font-ptsanscaption justify-start mt-[1px] w-[100%]">
            <Stack className="lg:h-[45px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] w-[100%]">
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
                          <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                          <Line className="bg-gray_502 h-[3px] w-[13%]" />
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
                  src="images/img_checkmark_1.svg"
                  className="checkmark2"
                  alt="checkmark"
                />
              </Row>
            </Stack>
            <Text className="columnnameandlocati2" as="h5" variant="h5">
              What can guests use at your place?
            </Text>
            <Row className="items-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[64%]">
              <Column className="bg-white_A700 justify-end lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] shadow-bs3 w-[61%]">
                <Column className="justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[50%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    General
                  </Text>
                  <Img
                    src="images/img_aircond.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[56%]"
                    alt="Aircond"
                  />
                  <Img
                    src="images/img_heating.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[32%]"
                    alt="Heating"
                  />
                  <Img
                    src="images/img_wifi.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[34%]"
                    alt="Wifi"
                  />
                  <Img
                    src="images/img_ev.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]"
                    alt="EV"
                  />
                </Column>
                <Line className="bg-gray_700_33 h-[1.5px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]" />
                <Column className="justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[37%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cooking and cleaning
                  </Text>
                  <Img
                    src="images/img_kitchen.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[42%]"
                    alt="Kitchen"
                  />
                  <Img
                    src="images/img_kitchenette.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[58%]"
                    alt="Kitchenette"
                  />
                  <Img
                    src="images/img_washingmachine.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[83%]"
                    alt="Washingmachine"
                  />
                </Column>
                <Line className="bg-gray_700_33 h-[1.5px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]" />
                <Column className="justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[27%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Entertainment
                  </Text>
                  <Img
                    src="images/img_tv.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[93%]"
                    alt="TV"
                  />
                  <Img
                    src="images/img_swimmingpool.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[1px] w-[100%]"
                    alt="Swimmingpool"
                  />
                  <Img
                    src="images/img_hottub.png"
                    className="Hottub"
                    alt="Hottub"
                  />
                  <Img
                    src="images/img_minibar.png"
                    className="Hottub"
                    alt="Minibar"
                  />
                  <Img
                    src="images/img_sauna.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[1px] w-[51%]"
                    alt="Sauna"
                  />
                </Column>
                <Line className="bg-gray_700_33 h-[1.5px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]" />
                <Column className="justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[29%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Outside and view
                  </Text>
                  <Img
                    src="images/img_balcony.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[54%]"
                    alt="Balcony"
                  />
                  <Img
                    src="images/img_gardenview.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[77%]"
                    alt="Gardenview"
                  />
                  <Img
                    src="images/img_terrace.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[54%]"
                    alt="Terrace"
                  />
                  <Img
                    src="images/img_view.png"
                    className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[39%]"
                    alt="View"
                  />
                </Column>
              </Column>
              <Column className="bg-white_A700 font-ptsans items-center justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs3 w-[37%]">
                <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="lightbulb"
                      alt="lightbulb"
                    />
                    <Text className="rowlightbulb" as="h6" variant="h6">
                      What if i don’t see a facility I offer?
                    </Text>
                    <Img
                      src="images/img_close.svg"
                      className="close_One2"
                      alt="close"
                    />
                  </Row>
                  <Text className="columnlightbulb2" variant="body3">
                    The facilities listed here are the ones most searched for by
                    guests. After you complete your registeration, you can add
                    more facilities from a larger list in the extranet, the
                    platform you’ll use to manage your property
                  </Text>
                </Column>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[39%]" />
            <Row className="font-ptsans items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack className="bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
                <Img
                  src="images/img_arrowleft_14X7.svg"
                  className="arrowleft2"
                  alt="arrowleft"
                />
              </Stack>
              <Button
                className="font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
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

export default PropertySetupAmenitiesPage;
