import Link from "next/link";
import EyeSwitch from "@/components/EyeSwitch";

const SwitchEye: React.FC = ()=> {
    return (
        <EyeSwitch link="/visual_acuity/LeftEyeTest"/>
    )
};

export default SwitchEye;