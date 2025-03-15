import { SocialInterface } from "../../components/types";
import { ResponseInterface } from "../../types/shared";
import { responseObject } from "../../utils/responseObject";

export const getSocials = async (): Promise<
  ResponseInterface<SocialInterface[] | []>
> => {
  try {
    const response = await fetch("https://portfolio-backend-production-1cbb.up.railway.app/social");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return responseObject({ data: [], message: "Error", status: 404 });
  }
};
