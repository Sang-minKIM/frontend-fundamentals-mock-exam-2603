import { css } from '@emotion/react';
import { Spacing, Text } from '_tosslib/components';
import { colors } from '_tosslib/constants/colors';

interface MessageBannerProps {
  text: string;
  type: 'success' | 'error';
}

export function MessageBanner({ text, type }: MessageBannerProps) {
  return (
    <div css={css`padding: 0 24px;`}>
      <div
        css={css`
          padding: 10px 14px; border-radius: 10px;
          background: ${type === 'success' ? colors.blue50 : colors.red50};
          display: flex; align-items: center; gap: 8px;
        `}
      >
        <Text
          typography="t7"
          fontWeight="medium"
          color={type === 'success' ? colors.blue600 : colors.red500}
        >
          {text}
        </Text>
      </div>
      <Spacing size={12} />
    </div>
  );
}
