import React from "react";

import { Column, Row, Text, Img, Button, Stack, Line } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarYesTwoOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate11() {
    navigate("/pricingandcalendaryesone");
  }
  function handleNavigate12() {
    navigate("/pricingandcalendarpricepernightone");
  }
  function handleNavigate103() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
              <Row className="bg-gray_50 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs w-[19%]">
                <Text className="Step11" variant="body2">
                  Name and location
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark3"
                  alt="checkmark"
                />
              </Row>
              <Row className="bg-gray_50 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs w-[19%]">
                <Text className="Step21" variant="body2">
                  Property Setup
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark_One1"
                  alt="checkmark One"
                />
              </Row>
              <Row className="bg-gray_50 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs w-[19%]">
                <Text className="Step31" variant="body2">
                  Photos
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark_Two"
                  alt="checkmark Two"
                />
              </Row>
              <Column className="bg-gray_50 items-center pt-[2px] px-[2px] shadow-bs w-[19%]">
                <Column className="items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
                  <Text className="Box1" variant="body2">
                    Pricing and calendar
                  </Text>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-blue_A200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-gray_503 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-gray_503 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-gray_503 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                  </Row>
                </Column>
              </Column>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[19%]"></div>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
            </Row>
            <Row className="items-start justify-end ml-[auto] xl:mt-[120px] 2xl:mt-[136px] 3xl:mt-[163px] lg:mt-[96px] w-[88%]">
              <Column className="items-center justify-start lg:mb-[35px] xl:mb-[44px] 2xl:mb-[50px] 3xl:mb-[60px] w-[45%]">
                <Column className="justify-start w-[99%]">
                  <Text className="Box1" as="h5" variant="h5">
                    Which cards can you charge at your property?
                  </Text>
                  <Column className="bg-white_A700 border border-black_900 border-solid justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] shadow-bs w-[100%]">
                    <Row className="items-center 2xl:mb-[107px] 3xl:mb-[128px] lg:mb-[76px] xl:mb-[95px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[43%]">
                      <Column className="items-center w-[12%]">
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
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]"
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
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]"
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
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]"
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
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]"
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
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbOutlineGray503"
                        >
                          <Img
                            src="images/img_vector_26X26.svg"
                            className="flex items-center justify-center"
                            alt="Vector Five"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbOutlineGray503"
                        >
                          <Img
                            src="images/img_vector_26X26.svg"
                            className="flex items-center justify-center"
                            alt="Vector Six"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbOutlineGray503"
                        >
                          <Img
                            src="images/img_vector_26X26.svg"
                            className="flex items-center justify-center"
                            alt="Vector Seven"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbOutlineGray503"
                        >
                          <Img
                            src="images/img_vector_26X26.svg"
                            className="flex items-center justify-center"
                            alt="Vector Eight"
                          />
                        </Button>
                      </Column>
                      <Column className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[85%]">
                        <Row className="items-end w-[89%]">
                          <Stack className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[20%]">
                            <div className="absolute bg-light_blue_401 lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] inset-[0] justify-center m-[auto] rounded-radius5 w-[82%]"></div>
                            <Img
                              src="images/img_television_27X33.svg"
                              className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]"
                              alt="television"
                            />
                          </Stack>
                          <Text className="AmericanExpres" variant="body2">
                            American Express
                          </Text>
                        </Row>
                        <Row className="items-start ml-[2px] mt-[4px] w-[38%]">
                          <Img
                            src="images/img_file.svg"
                            className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[41%]"
                            alt="file"
                          />
                          <Text className="Visa" variant="body2">
                            Visa
                          </Text>
                        </Row>
                        <Row className="items-end ml-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[84%]">
                          <Img
                            src="images/img_clock_21X28.svg"
                            className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] mb-[1px] w-[18%]"
                            alt="clock"
                          />
                          <Text className="MasterCard" variant="body2">
                            Euro/Mastercard
                          </Text>
                        </Row>
                        <Row className="items-center mt-[3px] w-[67%]">
                          <Img
                            src="images/img_folder.svg"
                            className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[27%]"
                            alt="folder"
                          />
                          <Text className="rowround" variant="body2">
                            Diners Club
                          </Text>
                        </Row>
                        <Row className="items-center ml-[3px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[34%]">
                          <Img
                            src="images/img_jcbcard.png"
                            className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[41%]"
                            alt="jcbcard"
                          />
                          <Text className="JCB" variant="body2">
                            JCB
                          </Text>
                        </Row>
                        <Row className="items-start ml-[1px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius3 w-[52%]">
                          <Img
                            src="images/img_clock_25X31.svg"
                            className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] rounded-radius3 w-[32%]"
                            alt="clock One"
                          />
                          <Text className="Maestro" variant="body2">
                            Maestro
                          </Text>
                        </Row>
                        <Row className="items-center ml-[1px] mt-[3px] w-[54%]">
                          <Img
                            src="images/img_twitter.svg"
                            className="common-pointer lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                            onClick={handleNavigate103}
                            alt="twitter"
                          />
                          <Text className="rowround" variant="body2">
                            Discover
                          </Text>
                        </Row>
                        <Row className="items-start mt-[4px] w-[98%]">
                          <Img
                            src="images/img_ticket.svg"
                            className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[18%]"
                            alt="ticket"
                          />
                          <Text className="Maestro" variant="body2">
                            UnionPay debit card
                          </Text>
                        </Row>
                        <Row className="items-end lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                          <Img
                            src="images/img_ticket.svg"
                            className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[17%]"
                            alt="ticket One"
                          />
                          <Text className="Unionpaycredit" variant="body2">
                            UnionPay credit card
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Stack className="3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[99%]">
                  <Stack className="absolute bg-white_A700 bottom-[0] lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] left-[0] outline outline-[1px] outline-light_blue_500 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] shadow-bs w-[13%]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="common-pointer arrowleft"
                      onClick={handleNavigate11}
                      alt="arrowleft"
                    />
                  </Stack>
                  <Column className="absolute items-end justify-start w-[100%]">
                    <Line className="bg-gray_200 h-[1px] w-[100%]" />
                    <Button
                      className="common-pointer font-bold lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                      onClick={handleNavigate12}
                      size="xl"
                      variant="FillLightblue800"
                    >
                      Continue
                    </Button>
                  </Column>
                </Stack>
              </Column>
              <Column className="bg-blue_50 justify-start lg:ml-[290px] xl:ml-[363px] 2xl:ml-[409px] 3xl:ml-[491px] lg:mt-[339px] xl:mt-[424px] 2xl:mt-[477px] 3xl:mt-[572px] p-[4px] shadow-bs w-[23%]">
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

export default PricingandcalendarYesTwoOnePage;
