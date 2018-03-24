/*
 * Copyright 2018 Tiarê Balbi Bonamini
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// flow-typed signature: cf11c66b2c3d752c24fdf3eae1b44e1c
// flow-typed version: 21e1db763b/dotenv_v4.x.x/flow_>=v0.34.x

declare module "dotenv" {
  declare type DotenvOptions = {
    encoding?: string,
    path?: string
  };

  declare function config(options?: DotenvOptions): boolean;

  declare module.exports: {
    config: typeof config,
    load: typeof config,
    parse: (src: string | Buffer) => { [string]: string }
  }
}
