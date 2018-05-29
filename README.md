This is a demo of using CloudEvents with Azure Event Grid to trigger Brigade scripts.

See the `brigade.js` script in this directory to see what we do,

## Prerequisites

- Install [Brigade](https://brigade.sh)
- Insttal the [Brigade EventGrid Gateway](https://github.com/radu-matei/brigade-eventgrid-gateway)

Now create a project that points to this repo.

Example project `values.yaml`:

```yaml
project: "technosophos/brigade-eventgrid-example"
repository: "github.com/technosophos/brigade-eventgrid-example"
cloneURL: "https://github.com/technosophos/brigade-eventgrid-example.git"

sharedSecret: "NotUsedHere"

secrets:
  eventGridToken: "you-should-change-this-to-be-your-own"

allowPrivilegedJobs: "false"
github: {}
kubernetes: {}
worker: {}
```

And install it: `helm install -n eventgrid-project brigade/brigade-project -f values.yaml`

Next, create an EventGrid subscription as descriped in [the gateway dos](https://github.com/radu-matei/brigade-eventgrid-gateway#creating-the-azure-eventgrid-subscription).

When you set up the notification with `az eventgrid event-subscription create`, the
URL you give it should look something like this:

```
az eventgrid event-subscription create --resource-id $storageid --name brigade-cloudevents \
--endpoint https://$YOURDOMAIN/cloudevents/v0.1/brigade-9e0af40182d1ab201542ebfb7d795d189ad0ec0b73512190e93935/you-should-change-this-to-be-your-own \
--event-delivery-schema cloudeventv01schema
```


