        # # if else
# temperature = 13

# if temperature > 28:
#     print('hot')
# elif temperature >= 15:
#     print('nice')
# elif temperature >= 10:
#     print('chelly')
# else:
#     print('cold')


        # # loop
# sum = 0
# for i in range(1,11):
#     sum = sum + i

# print(sum)


        # # loop advanced
# sum2 = 0
# for i in range(1,11):
#     if i % 2 == 0:
#         sum2 += i
#     else:
#         continue

# print(sum2)


        # # while loop
# sum3 = 0
# i = 1
# while i < 11:
#     sum3 += i
#     i=i+1

# print(sum3)


        # #even with while loop
# sum4 = 0
# j = 1
# while j < 11:
#     if j % 2 == 0:
#          sum4 += j
#     j+=1

# print(sum4)

        
        # # data struture
# names = ['hatem' , 'mohamed' , 'warda' , 'nesreen']
# for name in names:
#     print(name)

# #array in loop
# names = ['hatem' , 'mohamed' , 'warda' , 'nesreen']
# k = 0
# namesLength = len(names)
# for k in range(namesLength):
#     print(names[k])
#     k+=1


        # case 1 : sum total in LIST & average
# nums = [1,4,5,6,8,9,22]
# numLength = len(nums)
# sum = 0
# i = 1
# for i in range(numLength):
#     sum+= nums[i]
#     i+= 1

# print(sum)

# average = sum/numLength
# print(average)


        # dictionary
person1 = {
    "name":"Hatem",
    "city" :"15May",
    "job" : "Software Developer",
    "age" : "2024",
    "married" : False
}
person2 = {
    "name":"omHatem",
    "city" :"15May",
    "job" : "Teacher",
    "age" : "1973",
    "married" : False
}
print(person1["job"])

persons= [person1,person2]
print(persons[1]["job"])
