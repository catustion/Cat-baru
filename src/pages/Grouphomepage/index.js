import React from "react";

import { Column, Text, Row, Img, Button, Stack, Line, Input } from "components";
import Header1 from "components/Header/Header1";
import Footer from "components/Footer/Footer";

const GrouphomepagePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Column className="justify-start lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[100%]">
            <Text
              className="font-bold lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] text-black_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              Group homepage
            </Text>
            <Column className="bg-white_A700 items-center justify-start lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] shadow-bs5 w-[78%]">
              <Column className="justify-start lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] w-[99%]">
                <Row className="items-end w-[100%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[2%]"
                    alt="mobile"
                  />
                  <Text
                    className="font-bold mb-[4px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Create mobile rates to promotes your properties to guests
                    booking on phones.
                  </Text>
                  <Img
                    src="images/img_close_36X33.svg"
                    className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] mb-[4px] lg:ml-[398px] xl:ml-[498px] 2xl:ml-[560px] 3xl:ml-[672px] w-[3%]"
                    alt="close"
                  />
                </Row>
                <Column className="justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] mt-[3px] w-[39%]">
                  <Text className="columneachpropertyw" variant="body6">
                    Each property with a mobile rate can see, on average, a 26%
                    increase in its bookings.
                  </Text>
                  <Button
                    className="font-bold font-inter lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[40%]"
                    shape="RoundedBorder2"
                    size="md"
                    variant="OutlineBlue600"
                  >
                    Select 1 eligible property
                  </Button>
                </Column>
              </Column>
            </Column>
            <Text
              className="font-bold lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-black_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              Properties in progress (1)
            </Text>
            <Stack className="2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[78%]">
              <Column className="absolute bg-white_A700 justify-end left-[0] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] shadow-bs5 w-[100%]">
                <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[1px] w-[88%]">
                  <Row className="items-start w-[73%]">
                    <Text
                      className="font-bold my-[1px] text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Name
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] w-[1%]"
                      alt="arrowdown"
                    />
                    <Text
                      className="font-bold mb-[1px] lg:ml-[132px] xl:ml-[165px] 2xl:ml-[186px] 3xl:ml-[223px] text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Location
                    </Text>
                    <Text
                      className="2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[71px] xl:ml-[89px] rowid"
                      variant="body4"
                    >
                      Registration progress
                    </Text>
                    <Text
                      className="font-bold mb-[1px] lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Action
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
                    <Row className="items-center justify-between w-[30%]">
                      <Row className="items-center w-[47%]">
                        <Text
                          className="bg-gray_901 flex font-bold items-center lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius50 text-white_A700 w-[30px]"
                          variant="body4"
                        >
                          FP
                        </Text>
                        <Text
                          className="font-bold xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-black_900 w-[auto]"
                          variant="body4"
                        >
                          Fairuz Property
                        </Text>
                      </Row>
                      <Text className="Box1" variant="body4">
                        Malaysia
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[71px] xl:ml-[88px] w-[21%]">
                      <Line className="bg-red_801 h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[15%]" />
                      <Line className="bg-gray_500_4c h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[65%]" />
                      <Text
                        className="mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] rownameandlocati1"
                        variant="body4"
                      >
                        10%
                      </Text>
                    </Row>
                    <Text
                      className="font-normal lg:ml-[52px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] not-italic text-blue_600 w-[auto]"
                      variant="body4"
                    >
                      Continue registration
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[78px] xl:ml-[98px] w-[1%]"
                      alt="trash"
                    />
                    <Text
                      className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic text-red_801 w-[auto]"
                      variant="body4"
                    >
                      Delete
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Line className="absolute bg-gray_501 h-[1px] top-[44%] w-[100%]" />
            </Stack>
            <Text
              className="font-bold lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-black_900 w-[auto]"
              as="h5"
              variant="h5"
            >
              Active properties
            </Text>
            <Row className="font-inter items-center lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[78%]">
              <Input
                className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                wrapClassName="w-[45%]"
                type="text"
                name="GroupSixtyFour"
                placeholder="Filter by property ID, name or location"
                shape="RoundedBorder3"
                size="md"
                variant="OutlineGray501"
              ></Input>
              <Row className="font-ptsans items-start justify-center lg:ml-[362px] xl:ml-[453px] 2xl:ml-[510px] 3xl:ml-[612px] w-[8%]">
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
                className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                alt="overflowmenu"
              />
            </Row>
            <Stack className="font-inter lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[78%]">
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
            <Footer className="bg-indigo_900 font-ptsans 2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[73px] xl:mt-[92px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default GrouphomepagePage;
