import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function GeneralSettings() {
  return (
    <div>
      <SectionTitle title='Settings' />
      <Tabs defaultValue='profile' className='w-full'>
        <TabsList>
          <TabsTrigger value='profile'>Profile</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
          <TabsTrigger value='team'>Team</TabsTrigger>
          <TabsTrigger value='contact'>Contact</TabsTrigger>
          <TabsTrigger value='About'>About</TabsTrigger>
        </TabsList>
        <TabsContent value='profile'>
          Manage your profile details here.
        </TabsContent>
        <TabsContent value='password'>
          Update your password and security settings.
        </TabsContent>
        <TabsContent value='team'>
          Collaborate with your team and manage members.
        </TabsContent>
        <TabsContent value='contact'>
          Update your contact information here.
        </TabsContent>
        <TabsContent value='About'>
          Learn more about this application and its purpose.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default GeneralSettings;
