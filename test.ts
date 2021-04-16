import "node";

export {};
declare namespace NodeJS {
  interface Global {
    [CACHE_CONTROL_HEADERS]: WhatEverTypeYouWantThisToHave;
  }
}

const CACHE_CONTROL_HEADERS = Symbol.for("foo");
interface WhatEverTypeYouWantThisToHave {
  x: "";
}

global[CACHE_CONTROL_HEADERS].x;
