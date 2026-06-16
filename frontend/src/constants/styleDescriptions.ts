import { DecorStyle } from '../types';

export const styleDescriptions: Record<DecorStyle, string> = {
  [DecorStyle.Modern]: '偏好利落线条、隐藏收纳与低饱和材质，适合高效率城市住宅。',
  [DecorStyle.Chinese]: '重视秩序、留白和木作比例，适合有文化陈设与茶空间需求的家庭。',
  [DecorStyle.Nordic]: '喜欢自然光、浅木色和柔软织物，适合轻松明亮的日常起居。',
  [DecorStyle.Japanese]: '偏好低姿态家具、纸感光线和安静边界，适合慢节奏生活。',
  [DecorStyle.Industrial]: '接受裸露结构、金属与深色材质，适合个性化工作居住混合空间。',
  [DecorStyle.Mediterranean]: '偏好拱形、手作纹理和蓝白色彩，适合度假感强的空间。',
  [DecorStyle.Minimalist]: '追求克制、少物与高质量细节，适合长期维护成本低的住宅。'
};
