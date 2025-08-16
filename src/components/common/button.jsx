import { cn } from "@/utils/utils";

const Button = ({ variant = "primary", children, className, ...props }) => {
  const baseStyles =
    "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "border border-transparent bg-blue-600 text-white ",
    secondary:
      "border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
