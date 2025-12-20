import { test as basetest} from "./POMFixtures"
import CommonUtils from "./utils/CommonUtils"

type UtilsFixtures = {
    commonUitls : CommonUtils ;

}
export const test = basetest.extend<UtilsFixtures>({
    commonUitls : async({},use) => {
        const commonUitls = new CommonUtils();
        await use(commonUitls);
    }

}) 

export {expect} from "@playwright/test";