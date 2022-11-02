import React from "react";

import { SelectBoxselect } from "components/SelectBox select";
import { Column, Row, Text, Img, Line, Button, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const LanguagePage = () => {
  const navigate = useNavigate();

  function handleNavigate51() {
    navigate("/rules");    
  }
  function handleNavigate52() {
    navigate("/Parking");    
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="justify-start mt-[1px] w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[69%]">
                <Row className="items-end justify-center xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[32%]">
                  <Text className="tab" as="h6" variant="h6">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="checkmark2"
                    alt="checkmark"
                  />
                </Row>
                <Column className="items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[23%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text className="rownameandlocati1" as="h6" variant="h6">
                      Property setup
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                    </Row>
                  </Column>
                </Column>
                <Text className="Photos1" as="h6" variant="h6">
                  Photos
                </Text>
                <Text className="Pricingandcal1" as="h6" variant="h6">
                  Pricing and calendar
                </Text>
              </Row>
              <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
            </Column>
          </Column>
          <Column className="justify-start xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[90px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[40%]">
            <Text className="Box1" as="h3" variant="h3">
              What language do you or your staff speak?
            </Text>
            <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[99%]">
              <Column className="justify-start lg:mb-[167px] xl:mb-[209px] 2xl:mb-[236px] 3xl:mb-[283px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Column className="items-end justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[23%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Select language
                  </Text>
                  <Row className="items-start justify-start ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[93%]">
                   
                  <Column className="items-start lg:ml-[15px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[93%]">
                    <div class="form-check mb-2">
                      <input class="w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label 2xl:ml-[8px]" for="flexCheckDefault">Arabic</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label 2xl:ml-[8px]" for="flexCheckDefault">Cantonese</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label 2xl:ml-[8px]" for="flexCheckDefault">Chinese</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label 2xl:ml-[8px]" for="flexCheckDefault">English</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label 2xl:ml-[8px]" for="flexCheckDefault">Malay</label>
                    </div>
                    </Column>
                    
                    
                  </Row>
                </Column>
                <Line className="bg-gray_200_ce h-[1px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[36%]">
                  <Text className="Addadditional mb-5">
                    Add additional languages
                  </Text>
                  
                  <SelectBoxselect
                            className="font-normal 2xl:ml-[320px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_400 w-[250%]"
                            placeholderClassName="text-bluegray_400"
                            name="GroupEightyOne"
                            placeholder="Select languages"
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
                          ></SelectBoxselect>

                  

                </Column>
                
              </Column>
            </Column>
          </Column>
          <Line className="bg-gray_200_ce h-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[37%]" />
          <Row className="items-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
            <Stack className="bg-white_A700 border border-light_blue_800 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]">
              <Img
                src="images/img_arrowleft_14X7.svg"
                className="arrowleft1"
                alt="arrowleft"
                onClick={handleNavigate52}
              />
            </Stack>
            <Button class="bg-[#0071C2] hover:bg-[#00487A] ont-bold h-12 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_101 w-[87%]"
            shape="RoundedBorder2"
            onClick={handleNavigate51}
            size="xl">
            Continue
          </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default LanguagePage;
