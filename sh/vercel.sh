# 

nx deploy @wei/w --target=vercel

# Make sure you are in the right org
npx vercel teams list
# If needed, switch to correct team
npx vercel teams switch <team-id>
# Create the project
npx vercel project add wei
# Go to the Vercel dashboard, <my-project> > settings > Project ID
nx deploy @wei/w --target=vercel
