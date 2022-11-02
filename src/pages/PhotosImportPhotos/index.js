import React from "react";

import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PhotosImportPhotosPage = () => {
  const navigate = useNavigate();

  function handleNavigate95() {
    navigate("/pricingandcalendarno");
  }
  function handleNavigate96() {
    navigate("/photosimportphotosairbnb");
  }
  function handleNavigate97() {
    navigate("/photosimportphotosairbnb");
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
            <Row className="items-end justify-end ml-[auto] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[159px] lg:mt-[94px] w-[88%]">
              <Column className="justify-start w-[73%]">
                <Row className="items-start justify-between w-[100%]">
                  <Column className="justify-start w-[61%]">
                    <Text className="Box1" as="h5" variant="h5">
                      What does your place look like?
                    </Text>
                    <Column className="bg-white_A700 justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] shadow-bs w-[100%]">
                      <Row className="bg-green_50 font-ptsans items-end lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] px-[3px] w-[38%]">
                        <Img
                          src="images/img_combochartico.svg"
                          className="combochartico"
                          alt="combochartico"
                        />
                        <Text className="Alert" variant="body3">
                          High impact on bookings
                          <br />
                        </Text>
                      </Row>
                      <Text className="columncombochartico" variant="body2">
                        <span className="text-black_900 font-ptsans font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          Upload at least 5 photos of your property.{" "}
                        </span>
                        <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          The more you upload, the <br />
                          more likely you are to get bookings. You can add more
                          later.
                        </span>
                      </Text>
                      <Stack className="font-ptsans lg:h-[206px] xl:h-[258px] 2xl:h-[290px] 3xl:h-[348px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                        <Text
                          className="absolute bottom-[33%] font-normal inset-x-[0] leading-[normal] mx-[auto] not-italic text-black_900 text-center w-[38%]"
                          variant="body4"
                        >
                          Drag and drop your photos here
                          <br />
                          or
                        </Text>
                        <Column className="absolute items-center justify-end outline-[1px] outline-black_900 outline-dashed lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] w-[100%]">
                          <Img
                            src="images/img_vector.svg"
                            className="lg:h-[50px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[22%]"
                            alt="Vector"
                          />
                          <Stack className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[39%]">
                            <Column className="absolute bg-white_A700 inset-y-[6%] items-end justify-end outline outline-[1px] outline-light_blue_500 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] shadow-bs w-[100%]">
                              <Text
                                className="columnuploadphotos"
                                variant="body2"
                              >
                                Upload photos
                              </Text>
                            </Column>
                            <Img
                              src="images/img_camera.svg"
                              className="absolute lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] left-[0] lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                              alt="camera"
                            />
                          </Stack>
                        </Column>
                      </Stack>
                      <Row className="font-ptsans items-end justify-end lg:mb-[23px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] ml-[auto] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[55%]">
                        <Img
                          src="images/img_bookmark.svg"
                          className="common-pointer bookmark"
                          onClick={handleNavigate97}
                          alt="bookmark"
                        />
                        <Text
                          className="common-pointer rowbookmark"
                          variant="body2"
                          onClick={handleNavigate96}
                        >
                          Import photos from your Airbnb listing
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Row className="bg-white_A700 font-roboto items-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] shadow-bs w-[37%]">
                    <Img
                      src="images/img_thumbsup.svg"
                      className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] bookmark"
                      alt="thumbsup"
                    />
                    <Stack className="lg:h-[228px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[80%]">
                      <Text
                        className="absolute font-semibold h-[max-content] inset-[0] justify-center leading-[normal] m-[auto] text-black_900 w-[97%]"
                        variant="body2"
                      >
                        <span className="text-black_900 font-ptsans font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                          {`What if I don't have professional photos?`}
                          <br />
                        </span>
                        <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          <br />
                          No problem! You can use a smartphone or a digital
                          camera.Here are some tips for taking great photos of
                          your property
                          <br />
                          <br />
                        </span>
                        <span className="text-blue_A700 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          Here are some tips for taking great photos of your
                          property
                          <br />
                          <br />
                        </span>
                        <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                          If you don’t know who took a photo, it's best to avoid
                          using it. Only use photos others have taken if you
                          have permission.
                        </span>
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="close"
                        alt="close"
                      />
                    </Stack>
                  </Row>
                </Row>
                <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[61%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Line className="bg-gray_200 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Stack className="bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] shadow-bs w-[13%]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="arrowleft"
                          alt="arrowleft"
                        />
                      </Stack>
                      <Button
                        className="common-pointer font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                        onClick={handleNavigate95}
                        size="xl"
                        variant="FillLightblue800"
                      >
                        Continue
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-blue_50 justify-start lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[341px] xl:mt-[427px] 2xl:mt-[480px] 3xl:mt-[576px] p-[4px] shadow-bs w-[23%]">
                <Img
                  src="images/img_close.svg"
                  className="close_One"
                  alt="close One"
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

export default PhotosImportPhotosPage;
