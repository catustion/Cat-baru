import React from "react";

import {
  Column,
  Row,
  List,
  Text,
  Img,
  PagerIndicator,
  Button,
  Input,
  Line,
} from "components";
import Header from "components/Header/Header";
import Footer1 from "components/Footer/Footer1";
import { useNavigate } from "react-router-dom";

const PricingandcalendarYesIllimportunavailabledatesfromanotherwebsiteOnePage =
  () => {
    const navigate = useNavigate();

    function handleNavigate25() {
      navigate("/pricingandcalendarnoiwontsyncmyavailabilityone");
    }

    return (
      <>
        <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] 2xl:pb-[104px] 3xl:pb-[124px] lg:pb-[73px] xl:pb-[92px] w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Header className="w-[100%]" />
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-center justify-evenly w-[100%]">
                <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
                <List
                  className="gap-[0] grid grid-cols-3 min-h-[auto] w-[57%]"
                  orientation="horizontal"
                >
                  <Row className="listnameandlocati">
                    <Text className="rownameandlocati" variant="body2">
                      Name and location
                    </Text>
                    <Img
                      src="images/img_tiktokverified.png"
                      className="TikTokVerified"
                      alt="TikTokVerified"
                    />
                  </Row>
                  <Row className="listnameandlocati">
                    <Text className="rowpropertysetup" variant="body2">
                      Property Setup
                    </Text>
                    <Img
                      src="images/img_tiktokverified.png"
                      className="TikTokVerified_One"
                      alt="TikTokVerified One"
                    />
                  </Row>
                  <Row className="listnameandlocati">
                    <Text className="rowphotos" variant="body2">
                      Photos
                    </Text>
                    <Img
                      src="images/img_tiktokverified.png"
                      className="TikTokVerified_Two"
                      alt="TikTokVerified Two"
                    />
                  </Row>
                </List>
                <Column className="bg-gray_50 items-center p-[1px] shadow-bs w-[19%]">
                  <Text className="columnpricingandcal" variant="body2">
                    Pricing and calendar
                  </Text>
                  <PagerIndicator
                    className="h-[5px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[max-content]"
                    count={5}
                    activeCss="inline-block cursor-pointer w-[48px] h-[5px] bg-blue_A200 shadow-bs2"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer w-[48px] h-[5px] bg-green_200 shadow-bs2"
                    selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
                    unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
                  />
                </Column>
                <Button
                  className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                  size="2xl"
                  variant="OutlineBlack90026"
                >
                  Review and complete
                </Button>
                <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
              </Row>
              <Row className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[87%]">
                <Column className="items-center justify-start w-[68%]">
                  <Column className="justify-start w-[99%]">
                    <Text className="availability" as="h4" variant="h4">
                      Availability
                    </Text>
                    <Column className="bg-white_A700 justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] w-[100%]">
                      <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[1px] w-[50%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          When is the first date that guests can check in?
                          <br />
                        </Text>
                        <Row className="items-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[87%]">
                          <Img
                            src="images/img_record.png"
                            className="Record"
                            alt="Record"
                          />
                          <Text className="Assoonasposs" variant="body3">
                            <br />
                            <br />
                            As soon as possible
                          </Text>
                          <Img
                            src="images/img_round.png"
                            className="Round"
                            alt="Round"
                          />
                          <Text className="Onaspecificd" variant="body3">
                            On a specific date
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[99%]">
                      <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]">
                        <Text
                          className="font-normal leading-[normal] not-italic text-black_900 w-[87%]"
                          variant="body1"
                        >
                          To help you start earning, we automatically make your
                          property available for bookings for up to 18 months –
                          excluding days you import that are marked as
                          unavailable. You can manage your availability and make
                          dates unavailable for bookings after registration.
                        </Text>
                        <Text className="Doyouwantto" as="h5" variant="h5">
                          Do you want to sync your availability with another
                          website?
                        </Text>
                        <Text
                          className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-green_900 w-[81%]"
                          variant="body3"
                        >
                          You will avoid double bookings by syncing calendars.
                          It will also help you get your property listed on
                          Booking.com and open for bookings 80% faster.
                        </Text>
                        <Row className="items-start justify-evenly 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
                          <Img
                            src="images/img_record.png"
                            className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] w-[5%]"
                            alt="Record One"
                          />
                          <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[95%]">
                            <Text className="columnyesillimpor" variant="body3">
                              Yes, I’ll import unavailable dates from another
                              website
                            </Text>
                            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end mt-[4px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                              <Column className="justify-start mt-[1px] w-[92%]">
                                <Text className="Box1" variant="body3">
                                  Paste your iCal link here
                                </Text>
                                <Row className="items-center justify-between mt-[4px] w-[100%]">
                                  <Input
                                    className="w-[100%]"
                                    wrapClassName="2xl:h-[39px] 3xl:h-[46px] flex lg:h-[28px] w-[80%] xl:h-[34px]"
                                    name="RectangleFortyOne"
                                    placeholder=""
                                    variant="OutlineGray800"
                                  ></Input>
                                  <Button
                                    className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_600 w-[16%]"
                                    size="md"
                                    variant="FillBluegray101"
                                  >
                                    Import
                                  </Button>
                                </Row>
                                <Text
                                  className="font-normal lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-light_blue_800 w-[auto]"
                                  variant="body3"
                                >
                                  Where can I find my iCal link?
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-end 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[37%]">
                          <Img
                            src="images/img_round.png"
                            className="Round_One"
                            alt="Round One"
                          />
                          <Text className="rowround_one" variant="body3">
                            <br />
                            <br />
                            Yes, I’ll connect with a channel manager
                          </Text>
                        </Row>
                        <Row className="items-end 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[30%]">
                          <Img
                            src="images/img_round.png"
                            className="common-pointer Round_Two"
                            onClick={handleNavigate25}
                            alt="Round Two"
                          />
                          <Text className="rowround_two" variant="body3">
                            No, I won’t sync my availability
                            <br />
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[99%]" />
                  </Column>
                  <Footer1 className="lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[99%]" />
                </Column>
                <Column className="justify-start lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[28%]">
                  <Column className="bg-white_A700 items-center justify-start lg:mr-[34px] xl:mr-[43px] 2xl:mr-[49px] 3xl:mr-[58px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[86%]">
                    <Column className="justify-start lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                      <Row className="items-start w-[82%]">
                        <Img
                          src="images/img_idea.png"
                          className="bookmark"
                          alt="Idea"
                        />
                        <Text className="rowidea" variant="body1">
                          Not ready to sync your availability right now?
                        </Text>
                      </Row>
                      <Text className="columnidea" variant="body3">
                        That’s okay – you can sync your availability with other
                        websites after you finish your registration.
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-blue_50 items-end justify-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] p-[4px] shadow-bs w-[85%]">
                    <Column className="justify-start xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] mt-[4px] w-[93%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="rowdescription_two" variant="body4">
                          Is there anything preventing you from <br />
                          completing your registration at this <br />
                          point?
                        </Text>
                        <Img
                          src="images/img_multiply.png"
                          className="Multiply"
                          alt="Multiply"
                        />
                      </Row>
                      <Button
                        className="font-bold lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[43%]"
                        size="xl"
                        variant="OutlineLightblue500"
                      >
                        Let us know
                      </Button>
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

export default PricingandcalendarYesIllimportunavailabledatesfromanotherwebsiteOnePage;
