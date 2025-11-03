from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import google.generativeai as genai
import json
import re


@api_view(['GET'])
def health_check(request):
    """Health check endpoint"""
    return Response({
        'status': 'healthy',
        'message': 'VNR202 Backend API is running'
    })


@api_view(['POST'])
def generate_quiz(request):
    """Generate quiz using Gemini AI"""
    try:
        api_key = request.data.get('api_key') or settings.GEMINI_API_KEY
        
        if not api_key:
            return Response(
                {'error': 'API key is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        genai.configure(api_key=api_key)
        model = genai.GenerativeModel('gemini-pro')

        prompt = """Bạn là một giáo viên lịch sử Việt Nam chuyên nghiệp. Tạo 10 câu hỏi trắc nghiệm về chủ đề:

"Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (1975-1986)"

Tập trung vào hai giai đoạn:
1. Xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc (1975-1981)
2. Đại hội V của Đảng và đổi mới kinh tế (1982-1986)

Yêu cầu:
- Mỗi câu có 4 đáp án A, B, C, D
- Đáp án phải chính xác về mặt lịch sử
- Câu hỏi có độ khó từ dễ đến trung bình
- Câu hỏi phải đa dạng: về sự kiện, con số, nhân vật, ý nghĩa

Trả về CHÍNH XÁC format JSON sau (không thêm markdown, không thêm giải thích):
{
  "questions": [
    {
      "question": "Câu hỏi ở đây?",
      "options": ["A. Đáp án A", "B. Đáp án B", "C. Đáp án C", "D. Đáp án D"],
      "correctAnswer": 0,
      "explanation": "Giải thích ngắn gọn"
    }
  ]
}"""

        response = model.generate_content(prompt)
        text_response = response.text
        
        # Extract JSON from response
        json_match = re.search(r'\{[\s\S]*\}', text_response)
        if not json_match:
            return Response(
                {'error': 'Invalid response format from AI'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
        quiz_data = json.loads(json_match.group(0))
        
        return Response(quiz_data)

    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['POST'])
def chat_message(request):
    """Handle chat messages with Gemini AI"""
    try:
        api_key = request.data.get('api_key') or settings.GEMINI_API_KEY
        message = request.data.get('message')
        
        if not api_key:
            return Response(
                {'error': 'API key is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if not message:
            return Response(
                {'error': 'Message is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        genai.configure(api_key=api_key)
        model = genai.GenerativeModel('gemini-pro')

        prompt = f"""Bạn là một chuyên gia lịch sử Việt Nam, đặc biệt về giai đoạn 1975-1986.

Context: Chương 3 - Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (1975-1986)
Bao gồm:
- Xây dựng CNXH và bảo vệ Tổ quốc (1975-1981)
- Đại hội V và đổi mới kinh tế (1982-1986)

Hãy trả lời câu hỏi của học sinh một cách:
- Chính xác về mặt lịch sử
- Dễ hiểu, phù hợp với học sinh THPT
- Ngắn gọn (tối đa 150 từ)
- Có thể đưa ra ví dụ cụ thể

Câu hỏi: {message}"""

        response = model.generate_content(prompt)
        
        return Response({
            'response': response.text
        })

    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(['GET'])
def get_history_content(request):
    """Get history content data"""
    history_data = {
        'title': 'Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (1975 - 2018)',
        'subtitle': 'Giai đoạn 1975 - 1986',
        'periods': [
            {
                'id': '3.1.1',
                'title': 'Xây Dựng CNXH và Bảo Vệ Tổ Quốc (1975 - 1981)',
                'sections': [
                    {
                        'title': 'Bối Cảnh Lịch Sử',
                        'content': [
                            'Hậu quả chiến tranh nặng nề, kinh tế đình đốn',
                            'Sự khác biệt lớn giữa hai miền Nam - Bắc',
                            'Tình hình quốc tế phức tạp, cần bảo vệ biên giới'
                        ]
                    },
                    {
                        'title': 'Nhiệm Vụ Chính',
                        'content': [
                            'Thống nhất đất nước: Tổ chức bầu cử Quốc hội thống nhất (25/4/1976)',
                            'Khôi phục kinh tế: Phục hồi sản xuất, cải tạo xã hội chủ nghĩa ở miền Nam',
                            'Bảo vệ Tổ quốc: Đấu tranh chống Khmer Đỏ',
                            'Kháng chiến chống Trung Quốc: Chiến thắng cuộc chiến tranh biên giới phía Bắc (1979)'
                        ]
                    }
                ]
            },
            {
                'id': '3.1.2',
                'title': 'Đại Hội V và Đổi Mới Kinh Tế (1982 - 1986)',
                'sections': [
                    {
                        'title': 'Đại Hội V của Đảng (3/1982)',
                        'content': [
                            'Thừa nhận những khuyết điểm, sai lầm trong quá trình xây dựng CNXH',
                            'Đề ra phương hướng điều chỉnh nền kinh tế',
                            'Tập trung vào phát triển kinh tế hàng hóa nhiều thành phần'
                        ]
                    },
                    {
                        'title': 'Các Bước Đột Phá',
                        'content': [
                            'Chỉ thị 100-CT/TW (1981): Khoán sản phẩm đến nhóm lao động nông nghiệp',
                            'Nghị quyết 06-NQ/TW (1985): Đổi mới quản lý kinh tế, phá bỏ cơ chế bao cấp',
                            'Chính sách giá cả mới: Điều chỉnh giá cả, tiền lương phù hợp thực tế',
                            'Mở rộng tự chủ: Doanh nghiệp được quyền tự chủ trong sản xuất kinh doanh'
                        ]
                    }
                ]
            }
        ],
        'milestones': [
            {'year': '1975', 'event': 'Giải phóng hoàn toàn miền Nam, thống nhất đất nước'},
            {'year': '1976', 'event': 'Đại hội IV - Kế hoạch 5 năm, bầu cử Quốc hội thống nhất'},
            {'year': '1979', 'event': 'Chiến thắng chiến tranh biên giới phía Bắc'},
            {'year': '1981', 'event': 'Chỉ thị 100 - Khoán sản phẩm đến nhóm lao động'},
            {'year': '1982', 'event': 'Đại hội V - Bước ngoặt điều chỉnh kinh tế'},
            {'year': '1985', 'event': 'Nghị quyết 06 - Đổi mới quản lý kinh tế'},
            {'year': '1986', 'event': 'Chuẩn bị cho Đại hội VI - Công cuộc Đổi Mới'}
        ]
    }
    
    return Response(history_data)
