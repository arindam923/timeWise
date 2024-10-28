"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@iconify/react";

import {
  Button,
  Input,
  Link,
  Divider,
  User,
  Checkbox,
} from "@nextui-org/react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      console.log(error);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="relative flex h-screen w-screen">
      {/* Brand Logo */}
      <div className="absolute right-2 top-5 lg:right-5">
        <div className="flex items-center">
          {/* <AcmeIcon size={40} /> */}
          <p className="font-medium">TimeLess</p>
        </div>
      </div>

      {/* Right side */}
      <div
        className="relative hidden w-1/2 flex-col-reverse rounded-medium p-10 shadow-small lg:flex"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1729541363194-4ceb033b3d6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-end gap-4">
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
            }}
            classNames={{
              base: "flex flex-row-reverse",
              name: "w-full text-right text-black",
              description: "text-white/80",
            }}
            description="Founder & CEO at ACME"
            name="Bruno Reichert"
          />
          <p className="w-full text-right text-2xl text-white/60">
            <span className="font-medium">“</span>
            <span className="font-normal italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
              augue nec massa volutpat aliquet.
            </span>
            <span className="font-medium">”</span>
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex w-full items-center justify-center bg-background lg:w-1/2">
        <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
          <div className="w-full text-left">
            <p className="pb-2 text-xl font-medium">Welcome Back</p>
            <p className="text-small text-default-500">
              Log in to your account to continue
            </p>
          </div>

          <div className="flex w-full flex-col gap-2">
            <Button
              startContent={<Icon icon="flat-color-icons:google" width={24} />}
              variant="bordered"
            >
              Continue with Google
            </Button>
            <Button
              startContent={
                <Icon
                  className="text-default-500"
                  icon="fe:github"
                  width={24}
                />
              }
              variant="bordered"
            >
              Continue with Github
            </Button>
          </div>

          <div className="flex w-full items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1" />
          </div>

          <form className="flex w-full flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="underlined"
            />
            <Input
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="underlined"
            />
            <div className="flex items-center justify-between px-1 py-2">
              <Checkbox name="remember" size="sm">
                Remember for 15 days
              </Checkbox>
              <Link className="text-default-500" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
            <Button color="primary" type="submit">
              Log In
            </Button>
          </form>

          <p className="text-center text-small">
            Need to create an account?&nbsp;
            <Link href="/auth/register" size="sm">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
