import React from "react";

import { Column, Text, Row, Line, Stack, Img, Button } from "components";
import Header3 from "components/Header/Header3";
import { useNavigate } from "react-router-dom";

const NameLocation3rdPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate48() {
    navigate("/namelocation2ndpage");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[39px] xl:pb-[48px] 2xl:pb-[55px] 3xl:pb-[66px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header3 className="w-[100%]" />
          <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
            <Column className="justify-start pt-[2px] w-[100%]">
              <Column className="items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[20%]">
                <Column className="items-center justify-start w-[100%]">
                  <Text className="columnnameandlocati1" variant="body2">
                    Name and location
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                    <Line className="bg-green_201 h-[4px] w-[32%]" />
                    <Line className="bg-green_201 h-[4px] w-[32%]" />
                    <Line className="bg-light_blue_800 h-[4px] w-[32%]" />
                  </Row>
                </Column>
              </Column>
              <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            </Column>
            <Text className="columnlinetwo" as="h2" variant="h2">
              Pin the location of your property
            </Text>
            <Column className="bg-white_A700 items-center justify-end xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs3 w-[39%]">
              <Text className="Suggestioncard" as="h6" variant="h6">
                This is the locayion we’ll show to your guests on our site. Drag
                the map so the pin matches the exact location of your place.
              </Text>
              <Stack
                className="bg-cover bg-repeat lg:h-[296px] xl:h-[370px] 2xl:h-[416px] 3xl:h-[499px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:px-[133px] xl:px-[167px] 2xl:px-[188px] 3xl:px-[225px] w-[95%]"
                style={{ backgroundImage: "url('images/img_map.png')" }}
              >
                <Img
                  src="images/img_location.svg"
                  className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[4%] my-[auto] w-[5%]"
                  alt="location"
                />
              </Stack>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack
                className="common-pointer bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                onClick={handleNavigate48}
              >
                <Img
                  src="images/img_arrowleft_14X7.svg"
                  className="arrowleft2"
                  alt="arrowleft"
                />
              </Stack>
              <Button
                className="font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                size="xl"
                variant="OutlineLightblue8001_2"
              >
                Continue
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default NameLocation3rdPagePage;
