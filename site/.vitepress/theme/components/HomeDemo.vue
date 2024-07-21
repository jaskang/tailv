<script setup lang="ts">
import { Avatar, Button, Input, RadioCard, RadioGroup, Select, Tabs } from '../../../../src'

defineOptions({ name: 'HomeDemo' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
</script>
<template>
  <div class="grid grid-cols-3 items-start gap-6">
    <div class="flex items-center justify-center [&>div]:w-full">
      <div class="rounded-lg border p-6 shadow">
        <div class="flex flex-col space-y-1">
          <h3 class="text-default-900 text-2xl font-semibold tracking-tight">Create an account</h3>
          <p class="text-default-500 text-sm">Enter your email below to create your account</p>
        </div>
        <div class="mt-6 grid gap-4">
          <div class="flex gap-6">
            <Button class="flex-1">
              <svg
                viewBox="0 0 256 250"
                class="mr-2 h-4 w-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                />
              </svg>
              Github
            </Button>
            <Button class="flex-1">
              <svg
                class="mr-2 h-4 w-4"
                viewBox="0 0 256 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                />
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                />
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                />
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                />
              </svg>

              Google
            </Button>
          </div>
          <div class="relative">
            <div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="text-muted-foreground bg-background px-2">Or continue with</span>
            </div>
          </div>
          <div class="grid gap-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email:
            </label>
            <Input type="email" placeholder="请输入邮箱" />
          </div>
          <div class="grid gap-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >Password:
            </label>
            <Input type="password" placeholder="请输入密码" />
          </div>
        </div>

        <div class="mt-6">
          <Button block variant="solid" color="primary">提交</Button>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center [&>div]:w-full">
      <div class="rounded-lg border p-6 shadow">
        <div class="flex flex-col space-y-1">
          <h3 class="text-default-900 text-xl font-semibold tracking-tight">Team Members</h3>
          <p class="text-default-500 text-sm">Invite your team members to collaborate.</p>
        </div>
        <div class="mt-6 grid gap-6">
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <Avatar rounded size="lg" src="https://i.pravatar.cc/150?u=jaskang" />
              <div>
                <p class="text-sm font-medium leading-none">Sofia Davis</p>
                <p class="text-default-500 text-sm">m@example.com</p>
              </div>
            </div>
            <Select
              :options="[
                { label: 'Viewer', value: 'viewer' },
                { label: 'Developer', value: 'developer' },
                { label: 'Owner', value: 'owner' },
              ]"
              placeholder="请选择角色"
            />
          </div>
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <Avatar rounded size="lg" src="https://i.pravatar.cc/150?u=miya" />
              <div>
                <p class="text-sm font-medium leading-none">Jackson Lee</p>
                <p class="text-default-500 text-sm">p@example.com</p>
              </div>
            </div>

            <Select
              :options="[
                { label: 'Viewer', value: 'viewer' },
                { label: 'Developer', value: 'developer' },
                { label: 'Owner', value: 'owner' },
              ]"
              placeholder="请选择角色"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center [&>div]:w-full">
      <div class="rounded-lg border p-6 shadow">
        <div class="flex flex-col space-y-1">
          <h3 class="text-default-900 text-xl font-semibold tracking-tight">Payment Method</h3>
          <p class="text-default-500 text-sm">Add a new payment method to your account.</p>
        </div>
        <Tabs
          class="mt-6"
          :items="[
            { key: 'daily', label: 'Daily' },
            { key: 'monthly', label: 'Monthly' },
            { key: 'yearly', label: 'Yearly' },
          ]"
        />
        <RadioGroup class="mt-6 grid grid-cols-3 gap-4">
          <RadioCard value="card" class="flex flex-col items-center justify-between py-3 px-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="mb-2 h-6 w-6"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
            Card
          </RadioCard>
          <RadioCard value="paypal" class="flex flex-col items-center justify-between py-3 px-1 text-sm">
            <svg role="img" viewBox="0 0 24 24" class="mb-3 h-6 w-6">
              <path
                d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                fill="currentColor"
              />
            </svg>
            Paypal
          </RadioCard>
          <RadioCard value="apple" class="flex flex-col items-center justify-between py-3 px-1 text-sm">
            <svg role="img" viewBox="0 0 24 24" class="mb-3 h-6 w-6">
              <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
              />
            </svg>
            Apple
          </RadioCard>
        </RadioGroup>
      </div>
    </div>
  </div>
</template>
