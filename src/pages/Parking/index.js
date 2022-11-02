import React from "react";

import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const ParkingPage = () => {
  const navigate = useNavigate();

  function handleNavigate75() {
    navigate("/Parkingpaid");
  }

  function handleNavigate74() {
    navigate("/Parkingfree");
  }

  function handleNavigate76() {
    navigate("/PropertySetupBreakfastDetails");
  }
  function handleNavigate77() {
    navigate("/Language");
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
                    <Row className="items-center justify-evenly lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[199px] w-[100%]">
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
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
          <Column className="justify-start xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] lg:ml-[93px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] pr-[3px] py-[3px] w-[40%]">
            <Text className="columntellusaboutt" as="h3" variant="h3">
              Tell us about the parking situation at your apartment
            </Text>
            <Column className="bg-white_A700 border border-gray_300 border-solid justify-center lg:mb-[296px] xl:mb-[370px] 2xl:mb-[417px] 3xl:mb-[500px] ml-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[99%]">
              <Column className="items-start justify-start ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[44%]">
                <Text
                  className="font-bold text-black_900 w-[auto] mb-4"
                  as="h6"
                  variant="h6"
                >
                  Is parking available to guests?
                </Text>
                
                <div class="flex items-start mb-4" >
                  <input id="default-radio-1" type="radio" value="" onClick={handleNavigate74} name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </input><label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, free</label>
                </div>
                <div class="flex items-center mb-4">
                  <input id="default-radio-2" type="radio" value="" onClick={handleNavigate75} name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </input><label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, paid</label>
                </div>
                <div class="flex items-center">
                  <input checked id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </input><label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
              </Column>
            </Column>
            <Line className="bg-gray_200_ce h-[1px] lg:ml-[106px] xl:ml-[133px] 2xl:ml-[10px] 3xl:ml-[180px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[auto]" />
            <Row className="items-start xl:ml-[122px] 2xl:ml-[10px] 3xl:ml-[165px] lg:ml-[98px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[auto]">
              <Stack className="bg-white_A700 border border-light_blue_800 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]">
                <Img
                  src="images/img_arrowleft_14X7.svg"
                  className="arrowleft1"
                  onClick={handleNavigate76}
                  alt="arrowleft"
                />
              </Stack>
              <Button class="bg-[#0071C2] hover:bg-[#00487A] ont-bold h-12 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_101 w-[87%]"
                shape="RoundedBorder2"
                onClick={handleNavigate77}
                size="xl">
                Continue
              </Button>  
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ParkingPage;
