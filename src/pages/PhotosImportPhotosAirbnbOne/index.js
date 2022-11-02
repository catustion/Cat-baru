import React from "react";

import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PhotosImportPhotosAirbnbOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/pricingandcalendarnoone");
  }
  function handleNavigate5() {
    navigate("/photosimportphotosone");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
              <Row className="bg-gray_50 items-center justify-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] shadow-bs w-[19%]">
                <Text className="Step1" variant="body2">
                  Name and location
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
              </Row>
              <Row className="bg-gray_50 items-center justify-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] shadow-bs w-[19%]">
                <Text className="Step2" variant="body2">
                  Property Setup
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark_One"
                  alt="checkmark One"
                />
              </Row>
              <Column className="bg-gray_50 items-center lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] shadow-bs w-[19%]">
                <Text className="Step3" variant="body2">
                  Photos
                </Text>
                <Line className="bg-blue_A200 h-[5px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] shadow-bs2 w-[100%]" />
              </Column>
              <Row className="bg-gray_50 items-center justify-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] shadow-bs w-[19%]">
                <Text className="Step4" variant="body2">
                  Pricing and calendar
                </Text>
                <Img src="images/img_clock.svg" className="clock" alt="clock" />
              </Row>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[19%]"></div>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
            </Row>
            <Row className="font-roboto items-end justify-end ml-[auto] lg:mt-[119px] xl:mt-[149px] 2xl:mt-[168px] 3xl:mt-[201px] w-[88%]">
              <Column className="items-center justify-start w-[45%]">
                <Column className="bg-white_A700 justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] shadow-bs w-[100%]">
                  <Img
                    src="images/img_download_50X50.svg"
                    className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] ml-[2px] lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                    alt="download"
                  />
                  <Text className="Box11" variant="body2">
                    <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      Import photos from your Airbnb listing
                      <br />
                      <br />
                      <br />
                    </span>
                    <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                      If you have your property listed on Airbnb you can import
                      photos from that listing to this one. Simply copy the URL
                      address that guests see for your listing and paste into
                      the box below.
                      <br />
                      <br />
                    </span>
                    <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      <br />
                      <br />
                    </span>
                    <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                      {`Note: Photos taken by Airbnb's professional photographers cannot be uploaded here.`}
                      <br />
                      <br />
                    </span>
                    <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      <br />
                      <br />
                      Live listing URL address:
                    </span>
                  </Text>
                  <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:mb-[102px] xl:mb-[128px] 2xl:mb-[144px] 3xl:mb-[172px] ml-[2px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[95%]">
                    <div className="absolute bg-white_A700 bottom-[0] lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] outline outline-[1px] outline-gray_402 shadow-bs w-[100%]"></div>
                    <Text
                      className="absolute font-light left-[4%] text-white_A700 top-[0] w-[auto]"
                      variant="body3"
                    >
                      url address
                    </Text>
                  </Stack>
                </Column>
                <Column className="font-ptsans items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Line className="bg-gray_200 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Stack
                        className="common-pointer bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] shadow-bs w-[13%]"
                        onClick={handleNavigate5}
                      >
                        <Img
                          src="images/img_arrowleft.svg"
                          className="arrowleft"
                          alt="arrowleft"
                        />
                      </Stack>
                      <Button
                        className="common-pointer font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                        onClick={handleNavigate4}
                        size="xl"
                        variant="FillLightblue800"
                      >
                        Continue
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-blue_50 font-ptsans justify-start lg:ml-[290px] xl:ml-[363px] 2xl:ml-[409px] 3xl:ml-[491px] lg:mt-[317px] xl:mt-[396px] 2xl:mt-[446px] 3xl:mt-[535px] p-[4px] shadow-bs w-[23%]">
                <Img
                  src="images/img_close.svg"
                  className="close_One"
                  alt="close"
                />
                <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mx-[auto] w-[92%]">
                  <Text className="columndescription_two" variant="body2">
                    Is there anything preventing you from <br />
                    completing your registration at this <br />
                    point?
                  </Text>
                  <Button
                    className="font-bold lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[44%]"
                    size="xl"
                    variant="OutlineLightblue500"
                  >
                    Let us know
                  </Button>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PhotosImportPhotosAirbnbOnePage;
