import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Stack,
  SelectBox,
  Button,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const ParkingpaidPage = () => {
  const navigate = useNavigate();

  function handleNavigate75() {
    navigate("/parkingfree");
  }
  function handleNavigate74() {
    navigate("/parking");
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
                    src="images/img_checkmark_25X25.svg"
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
          <Column className="justify-start xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] lg:ml-[93px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] pr-[3px] pt-[3px] w-[40%]">
            <Text className="columntellusaboutt" as="h3" variant="h3">
              Tell us about the parking situation at your apartment
            </Text>
            <Stack className="lg:h-[409px] xl:h-[511px] 2xl:h-[690px] 3xl:h-[690px] ml-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[99%]">
              <Stack className="absolute lg:h-[411px] xl:h-[514px] 2xl:h-[578px] 3xl:h-[693px] w-[100%]">
                <div className="absolute bg-white_A700 border border-gray_300 border-solid lg:h-[411px] xl:h-[514px] 2xl:h-[715px] 3xl:h-[693px] w-[100%]"></div>
                <Column className="absolute bottom-[-13%] justify-start left-[3%] w-[54%]">

                <Column className="items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                <Column className="items-start justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                  <Text
                    className="font-bold text-black_900 w-[auto] mb-4 left-3px"
                    as="h6"
                    variant="h6"
                  >
                    How much does parking cost?
                  </Text></Column>
                  <textarea id="message" rows="1" class="justify-start mb-1.5 block p-1 w-60 text-sm text-gray-900 bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MYR"></textarea>
                  <SelectBox
                  className="mb-7 border border-bluegray_102 border-solid font-normal lg:ml-[182px] xl:ml-[230px] 2xl:ml-[345px] 3xl:ml-[320px] lg:mt-[39px] xl:mt-[60px] 2xl:mt-[-38px] 3xl:mt-[66px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[35%]"
                  placeholderClassName="text-black_900"
                  name="Smalldropdown"
                  placeholder="Per day"
                  isSearchable={false}
                  isMulti={false}
                  variant="FillWhiteA700"
                ></SelectBox>
                  </Column>

                <Column className="items-start justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[95%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Do they need to reserve a parking spot?
                  </Text>
                  </Column>
                  <Column className="justify-start ml-[3px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] py-[1px] w-[56%]">
                  <div class="flex items-center mb-4" >
                <input checked id="default-radio-1" type="radio" value="" name="default-radio-2" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reservation needed</label>
              </div>
              <div class="flex items-center mb-6">
                <input id="default-radio-2" type="radio" value="" name="default-radio-2" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No reservation needed</label>
              </div>
                  </Column>
                  <Column className="items-start justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[65%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Where is parking located?
                    </Text>
                  </Column>
                  <Column className="items-center justify-start ml-[3px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] py-[1px] w-[24%]">
                  <div class="flex items-center mb-4" >
                <input checked id="default-radio-1" type="radio" value="" name="default-radio-3" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On site</label>
              </div>
              <div class="flex items-center mb-4">
                <input id="default-radio-2" type="radio" value="" name="default-radio-3" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Off site</label>
              </div>
                  </Column>
                  <Column className="items-start justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[90%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      What type of parking is it?
                    </Text>
                  </Column>
                  <Column className="justify-start ml-[3px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] py-[1px] w-[23%]">
                    <div class="flex items-center mb-4" >
                <input checked id="default-radio-1" type="radio" value="" name="default-radio-4" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
              </div>
              <div class="flex items-center mb-4">
                <input id="default-radio-2" type="radio" value="" name="default-radio-4" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Public</label>
              </div>
                  </Column>
                </Column>
              </Stack>
              <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[6%] w-[95%]">
                <Column className="items-start justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[90%]">
                  <Column className="items-start justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[43%]">
                    <Text
                      className="font-bold text-black_900 w-[auto] mb-4"
                      as="h6"
                      variant="h6"
                    >
                      Is parking available to guests?
                    </Text>
                  </Column>
                  <div class="flex items-center mb-4" >
                <input id="default-radio-1" type="radio" value="" onClick={handleNavigate75} name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, free</label>
              </div>
              <div class="flex items-center mb-4">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </input><label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, paid</label>
              </div>
              <div class="flex items-center">
                  <input id="default-radio-3" type="radio" value="" onClick={handleNavigate74} name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  </input><label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
              </div>
                  <Line className="bg-gray_200_ce h-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]" />
                </Column>
              </Column>
            </Stack>
          </Column>
          <Line className="bg-gray_200_ce h-[1px] lg:ml-[106px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[37%]" />
          <Row className="items-center xl:ml-[122px] 2xl:ml-[138px] 3xl:ml-[165px] lg:ml-[98px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
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
    </>
  );
};

export default ParkingpaidPage;
