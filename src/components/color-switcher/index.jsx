import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "next-themes";

const ColorSwitcher = () => {
    const { setTheme } = useTheme();
    return (
        <div className="setColor">
            <button
                type="button"
                className={clsx("light switch-btn")}
                onClick={() => setTheme("light")}
            >
                <Image
                    src="/images/icons/sun-01.svg"
                    alt="Sun images"
                    width={48}
                    height={48}
                />
            </button>
            <button
                type="button"
                className={clsx("dark switch-btn")}
                onClick={() => setTheme("dark")}
            >
                <Image
                    src="/images/icons/vector.svg"
                    alt="Vector Images"
                    width={48}
                    height={48}
                />
            </button>
        </div>
    );
};

export default ColorSwitcher;
