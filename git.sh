REMOTE="root@161.97.134.164:/home/sportswander.in/domains/sa.sportswander.in/swsuperadmin.git"

rm -rf prod_build
mkdir prod_build
zip -r build.zip build/*
mv build.zip prod_build
cd prod_build
unzip build.zip
rm build.zip
cd build 
mv * ..
cd ..
rm -rf build
touch .htaccess
echo "ErrorDocument 404 /index.html" > .htaccess
git init
git branch -M master
git add .
git commit -m "production push"
git remote add production $REMOTE
git push -u -f production master
cd ..