import React from "react";

import { Column, Stack, Img, Row, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import Header from "components/Header/Header";

const HostprofilePage = () => {
  const navigate = useNavigate();
  
  function handleNavigate51() {
    navigate("/");
  }
  
  function handleNavigate52() {
    navigate("/rules");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
        <Header className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[69%]">
                <Row className="items-end justify-center mb-[1px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[32%]">
                  <Text className="tab" as="h6" variant="h6">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="checkmark2"
                    alt="checkmark"
                  />
                </Row>
                <Column className="items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[23%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text className="rownameandlocati1" as="h6" variant="h6">
                      Property setup
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                    </Row>
                  </Column>
                </Column>
                <Text className="Photos4" as="h6" variant="h6">
                  Photos
                </Text>
                <Text className="Pricingandcal4" as="h6" variant="h6">
                  Pricing and calendar
                </Text>
              </Row>
              <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
            </Column>
          </Column>
          <Text className="columnuser" as="h3" variant="h3">
            Host profile
          </Text>
          <Row className="items-start xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[66%]">
            <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[60%]">
              <Text className="Maincard3" variant="body1">
                Help your listing stand out by telling potential guests a bit
                more about yourself, your property and your neighbourhood. This
                information will be shown on your property page.
              </Text>
              <Row className="items-start justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[93%]">
                   
                  <Column className="items-start lg:ml-[15px] xl:ml-[7px] 2xl:ml-[-3px] 3xl:ml-[9px] w-[93%]">
                    
                  <div class="mb-5">
                    <input type="checkbox" name="agree" id="agree" class="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label for="agree" class="ml-3">The property
                    </label>

                    <div class="mt-2 hidden peer-checked:block">
                        <Column>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About the property</label>
                    <textarea id="message" rows="4" class="block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]" placeholder="What makes your place
                    unique? What can guests expect?"></textarea></Column>

                    </div>
                    </div>
            
                  <div class="mb-5 ">
                    <input type="checkbox" name="agree" id="agree" class="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label for="agree" class="ml-3">The host
                    </label>

                    <div class="mt-2 hidden peer-checked:block">
                        
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Host Name</label>
                    <textarea id="message" rows="1" class="mb-3 block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]" placeholder=""></textarea>

                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About the host</label>
                    <textarea id="message" rows="4" class="block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]" placeholder="What are your interests? 
                    What do you like about hosting?"></textarea>

                    </div>
                    </div>
                  
                  <div class="mb-5">
                    <input type="checkbox" name="agree" id="agree" class="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label for="agree" class="ml-3">The neighbourhood
                    </label>

                    <div class="mt-2 hidden peer-checked:block">
                        
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About the neighbourhood</label>
                    <textarea id="message" rows="4" class="block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]" placeholder="What's the area like? 
                    Are there any attractions nearby?"></textarea>

                    </div>
                    </div>
                  
                  <div class="mb-5">
                    <input type="checkbox" name="agree" id="agree" class="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label for="agree" class="ml-3">None of the above/I'll add these later
                    </label>

                    
                    </div>
                  
                    </Column>
                    
                    
                  </Row>
            </Column>
            <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[38%]">
              <Column className="justify-start lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mt-[1px] w-[97%]">
                <Row className="items-start w-[100%]">
                  <Img
                    src="images/img_lightbulb_1.svg"
                    className="lightbulb8"
                    alt="lightbulb"
                  />
                  <Text className="rowlightbulb3" as="h5" variant="h5">
                    Can I make changes to my host profile later?
                  </Text>
                  <Img
                    src="images/img_close_29X29.svg"
                    className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                    alt="close"
                  />
                </Row>
                <Text className="columnlightbulb4" variant="body1">
                  If you’re no ready to add all of these details right now,
                  that’s okay. You can always change your host profile in the
                  extranet after you complete registration.
                </Text>
              </Column>
            </Column>
          </Row>
          <Line className="bg-gray_200_ce h-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[37%]" />
          <Row className="items-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
            <Stack className="bg-white_A700 border border-light_blue_800 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]">
              <Img
                src="images/img_arrowleft_14X7.svg"
                className="arrowleft1"
                onClick={handleNavigate52}
                alt="arrowleft"
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

export default HostprofilePage;
