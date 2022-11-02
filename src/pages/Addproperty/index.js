import React from "react";

import { Stack, Column, Text, Row, Img, Button, Line, Input } from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const AddpropertyPage = () => {
  const navigate = useNavigate();

  function handleNavigate60() {
    navigate("/grouphomepage");
  }
  function handleNavigate61() {
    navigate("/grouphomepage");
  }

  return (
    <>
      <Stack className="bg-gray_50 font-ptsans 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] mx-[auto] w-[100%]">
        <Stack className="absolute bottom-[0] 2xl:h-[1023px] 3xl:h-[1228px] lg:h-[727px] xl:h-[910px] w-[100%]">
          <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[18%] w-[78%]">
            <Text
              className="font-bold ml-[2px] text-black_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              Group homepage
            </Text>
            <Column className="bg-white_A700_99 items-center justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pl-[2px] py-[2px] w-[100%]">
              <Column className="justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] w-[99%]">
                <Row className="items-end w-[100%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[2%]"
                    alt="mobile"
                  />
                  <Text
                    className="font-bold mb-[4px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Create mobile rates to promotes your properties to guests
                    booking on phones.
                  </Text>
                  <Img
                    src="images/img_close_36X33.svg"
                    className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[398px] xl:ml-[498px] 2xl:ml-[560px] 3xl:ml-[672px] w-[3%]"
                    alt="close"
                  />
                </Row>
                <Column className="justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] mt-[3px] w-[41%]">
                  <Text className="columneachpropertyw" variant="body6">
                    Each property with a mobile rate can see, on average, adsfs
                    26% increase in its bookings.
                  </Text>
                  <Button
                    className="font-bold font-inter lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[39%]"
                    shape="RoundedBorder2"
                    size="md"
                    variant="OutlineBlue600"
                  >
                    Select 1 eligible property
                  </Button>
                </Column>
              </Column>
            </Column>
            <Row className="font-inter items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
              <Column className="bg-white_A700 border border-gray_501 border-solid lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius3 w-[44%]">
                <Text
                  className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[3px] rownameandlocati1"
                  variant="body4"
                >
                  Filter by property ID, name or location
                </Text>
              </Column>
              <Row className="font-ptsans items-start justify-center lg:ml-[364px] xl:ml-[455px] 2xl:ml-[512px] 3xl:ml-[614px] w-[8%]">
                <Img
                  src="images/img_download.svg"
                  className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                  alt="download"
                />
                <Text className="Download" variant="body4">
                  Download
                </Text>
              </Row>
              <Img
                src="images/img_overflowmenu.svg"
                className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                alt="overflowmenu"
              />
            </Row>
            <Stack className="font-inter lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
              <Stack className="absolute lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] w-[100%]">
                <div className="absolute bg-white_A700 lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] right-[0] w-[100%]"></div>
                <Line className="absolute bg-gray_501 h-[1px] top-[45%] w-[100%]" />
              </Stack>
              <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[96%]">
                <Column className="items-center justify-start w-[5%]">
                  <Column className="items-end justify-start w-[100%]">
                    <Row className="items-start justify-end ml-[auto] w-[71%]">
                      <Text className="rowid" variant="body4">
                        ID
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                        alt="arrowup"
                      />
                    </Row>
                    <Text className="columnid" variant="body4">
                      374474
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] pb-[1px] w-[14%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnname" variant="body4">
                      Name
                    </Text>
                    <Row className="items-center justify-evenly lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[97%]">
                      <div className="bg-gray_901 rounded-radius50 bookmark"></div>
                      <Stack className="lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] w-[77%]">
                        <Text
                          className="absolute font-inter top-[0] columnarrivalsdepart"
                          variant="body4"
                        >
                          D’Concept Hotel
                          <br />
                          Kulim
                        </Text>
                        <Text
                          className="absolute bg-indigo_900_c4 bottom-[0] font-bold font-ptsans px-[4px] py-[1px] right-[14%] rounded-radius3 text-white_A700 w-[50px]"
                          variant="body4"
                        >
                          Genius
                        </Text>
                      </Stack>
                    </Row>
                    <Row className="font-ptsans items-end justify-end ml-[auto] mt-[1px] w-[77%]">
                      <Line className="bg-light_green_A700_c4 h-[3px] mb-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rotate-[1deg] w-[64%]" />
                      <Text className="percentage" variant="body4">
                        100%
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] w-[20%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnlocation" variant="body4">
                      Location
                    </Text>
                    <Row className="font-ptsans items-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
                      <Img
                        src="images/img_television.svg"
                        className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[9%]"
                        alt="television"
                      />
                      <Text className="rowtelevision" variant="body4">
                        No.4, Jalan KLC Satu (1), Kulim
                        <br />
                        Landmark Central, 09000 Kulim, <br />
                        Kedah, Darul Aman, Kulim
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="justify-start lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[6%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Status
                  </Text>
                  <Text
                    className="font-normal leading-[normal] ml-[1px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] not-italic text-black_900 w-[98%]"
                    variant="body4"
                  >
                    Open/
                    <br />
                    Bookable
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[15%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnarrivalsdepart" variant="body4">
                      Arrivals/Departures for
                      <br />
                      today & tomorrow
                    </Text>
                    <Row className="items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[48%]">
                      <Text className="rowsix" variant="body4">
                        6
                      </Text>
                      <Text
                        className="lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] rowsix"
                        variant="body4"
                      >
                        5
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="justify-start lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[7%]">
                  <Text className="columnarrivalsdepart" variant="body4">
                    Guest <br />
                    Messages
                  </Text>
                  <Text
                    className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] rowsix"
                    variant="body4"
                  >
                    2
                  </Text>
                </Column>
                <Column className="justify-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[12%]">
                  <Text className="columnarrivalsdepart" variant="body4">
                    HalalBooking.com
                    <br />
                    messages
                  </Text>
                  <Text
                    className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] rowsix"
                    variant="body4"
                  >
                    0
                  </Text>
                </Column>
              </Row>
            </Stack>
          </Column>
          <Column className="absolute bg-black_900_7f items-center justify-start pb-[1px] pr-[1px] w-[100%]">
            <Column className="justify-start lg:mb-[354px] xl:mb-[443px] 2xl:mb-[498px] 3xl:mb-[597px] w-[100%]">
              <Header1 className="w-[100%]" />
              <Column className="bg-white_A700 items-center justify-start lg:ml-[297px] xl:ml-[371px] 2xl:ml-[418px] 3xl:ml-[501px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] p-[1px] shadow-bs4 w-[38%]">
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-end justify-between w-[91%]">
                      <Text
                        className="font-bold mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_801 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Add property
                      </Text>
                      <Img
                        src="images/img_close_36X33.svg"
                        className="common-pointer lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[5%]"
                        onClick={handleNavigate60}
                        alt="close One"
                      />
                    </Row>
                    <Line className="bg-gray_400 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="justify-start lg:mb-[21px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[91%]">
                  <Column className="justify-start rounded-radius3 w-[100%]">
                    <Text className="Box1" variant="body4">
                      Property name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                      wrapClassName="mt-[2px] w-[100%]"
                      type="text"
                      name="GroupSeventyTwo"
                      placeholder="Property name"
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineGray501"
                    ></Input>
                  </Column>
                  <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius3 w-[100%]">
                    <Text className="Box1" variant="body4">
                      Your first and last name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-black_900 text-black_900 w-[100%]"
                      wrapClassName="mt-[4px] w-[100%]"
                      name="GroupSeventyOne"
                      placeholder="de Concept Hotel Kulim"
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineGray501"
                    ></Input>
                  </Column>
                  <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius3 w-[100%]">
                    <Text className="Box1" variant="body4">
                      Your email address
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-black_900 text-black_900 w-[100%]"
                      wrapClassName="mt-[3px] w-[100%]"
                      type="email"
                      name="email"
                      placeholder="deconceptkulim@gmail.com"
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineGray501"
                    ></Input>
                  </Column>
                  <Button
                    className="common-pointer font-bold lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius2 xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[34%]"
                    onClick={handleNavigate61}
                    size="lg"
                    variant="FillLightblue800"
                  >
                    Build your property
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
        </Stack>
        <Footer className="absolute bg-indigo_900 bottom-[0] inset-x-[0] w-[100%]" />
      </Stack>
    </>
  );
};

export default AddpropertyPage;
