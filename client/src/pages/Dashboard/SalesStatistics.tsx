import Chart from "@/components/Chart";
import SectionTitle from "@/components/SectionTitle";

function SalesStatistics() {
  return (
    <div>
      <SectionTitle title='Statistics' />
      <div className='flex gap-4 justify-center items-start flex-wrap'>
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </div>
      <div className='flex gap-4 justify-center items-start mt-3'>
        <Card className='flex-1 min-w-52'>
          <CardHeader>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Chart />
          </CardContent>
        </Card>
        <Card className='min-w-96'>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SalesStatistics;
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StatisticCard = () => {
  return (
    <Card className='flex-1 min-w-52'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};
