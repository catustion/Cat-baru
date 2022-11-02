import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  function handleNavigate67() {
    navigate("/questionaboutproperty");
  }
  function handleNavigate83() {
    navigate("/howmuchpropertytolist");
  }

  return (
    <>
      <Column className="bg-gray_50 items-center justify-start mx-[auto] lg:pb-[33px] xl:pb-[41px] 2xl:pb-[47px] 3xl:pb-[56px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Stack className="font-roboto 2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[90px] w-[100%]">
            <Text
              className="absolute bottom-[30%] left-[2%] text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              HalalHoliday
            </Text>
            <Row className="absolute bg-indigo_900 font-ptsans items-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
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
                  alt="user"
                />
              </Row>
            </Row>
          </Stack>
          <Text
            className="font-ptsans 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] not-italic text-black_900 w-[auto]"
            as="h2"
            variant="h2"
          >
            How many apartment are you listing?{" "}
          </Text>
          <Row className="font-ptsans items-start justify-end ml-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[88%]">
            <Column className="bg-white_A700 items-center justify-end lg:mb-[115px] xl:mb-[145px] 2xl:mb-[163px] 3xl:mb-[195px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] shadow-bs3 w-[45%]">
              <Column className="font-ptsans items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[18%]">
                <Text className="Box1" variant="body2">
                  You’re listing:
                </Text>
                <Img
                  src="images/img_volume.svg"
                  className="lg:h-[45px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[88%]"
                  alt="volume"
                />
              </Column>
              <Text
                className="font-roboto font-semibold leading-[normal] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] text-black_900 text-center w-[71%]"
                as="h3"
                variant="h3"
              >
                One apartment where guests can
                <br /> book the entire place
              </Text>
              <Text
                className="3xl:mt-[117px] lg:mt-[69px] xl:mt-[87px] 2xl:mt-[98px] columneachpropertyw"
                variant="body2"
              >
                Does this sound like your property?
              </Text>
              <Column className="font-ptsans items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]">
                <Button
                  className="common-pointer font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[100%]"
                  onClick={handleNavigate67}
                  size="xl"
                  variant="OutlineLightblue8001_2"
                >
                  Continue
                </Button>
                <Button
                  className="common-pointer font-bold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-light_blue_800 w-[100%]"
                  onClick={handleNavigate83}
                  size="xl"
                  variant="OutlineLightblue8001_2"
                >
                  No, I need to make a change
                </Button>
              </Column>
            </Column>
            <Column className="bg-blue_50 items-end justify-start lg:ml-[288px] xl:ml-[360px] 2xl:ml-[405px] 3xl:ml-[486px] lg:mt-[385px] xl:mt-[482px] 2xl:mt-[542px] 3xl:mt-[650px] p-[3px] shadow-bs w-[23%]">
              <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] mt-[2px] w-[95%]">
                <Row className="items-start justify-between ml-[4px] w-[99%]">
                  <Text className="rowdescription2" variant="body4">
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
                  className="font-bold lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[42%]"
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
    </>
  );
};

export default ConfirmationPage;
