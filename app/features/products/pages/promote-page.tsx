import { Form } from 'react-router';
import type { Route } from './+types/promote-page';
import { Hero } from '~/common/components/hero';
import SelectPair from '~/common/components/select-pair';
import { Calendar } from '~/common/components/ui/calendar';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { DateTime } from 'luxon';
import { Button } from '~/common/components/ui/button';

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Promote Product | ProductHunt Clone' },
    {
      name: 'description',
      content: 'Promote your product',
    },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();
  const totalDays =
    promotionPeriod?.from && promotionPeriod?.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          'days'
        ).days + 1
      : 0;
  return (
    <div>
      <Hero
        title="Promote Product"
        subtitle="Boost your product's visibility"
      />
      <Form className="max-w-screen-xs mx-auto flex flex-col gap-4 items-center w-full">
        <SelectPair
          label="Promotion"
          description="Select a promotion option"
          name="promotion"
          placeholder="Select a promotion"
          options={[
            {
              label: 'Promotion 1',
              value: 'promotion-1',
            },
            {
              label: 'Promotion 2',
              value: 'promotion-2',
            },
            {
              label: 'Promotion 3',
              value: 'promotion-3',
            },
          ]}
        />
        <div className="flex flex-col gap-4 items-center w-full">
          <Label className="flex flex-col gap-1 text-center">
            Select a range of date
            <small className="text-muted-foreground">
              Minimum duration is 3 days.
            </small>
          </Label>
          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{ before: new Date() }}
          />
        </div>
        <div>
          <Button disabled={totalDays === 0}>
            Go to checkout (${totalDays * 20})
          </Button>
        </div>
      </Form>
    </div>
  );
}
